import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext'; 
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { productosEnCarrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [bloquearMetodoPago, setBloquearMetodoPago] = useState(false);
  const [mostrarPago, setMostrarPago] = useState(false);
  const navigate = useNavigate();

  const total = productosEnCarrito.reduce((acc, prod) => {
    const precioLimpio = Number(String(prod.precio).replace(/\./g, ''));
    const cantidad = Number(prod.cantidad);
    return acc + precioLimpio * cantidad;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!metodoPago) {
      toast.error('Por favor, seleccioná un método de pago.');
      return;
    }

    if (metodoPago === 'contacto') {
      vaciarCarrito();
      navigate('/final');
    } else if (metodoPago === 'mercado_pago') {
      setMostrarPago(true);
      setBloquearMetodoPago(true);
    }
  };

  return (
    <>
      <div className="checkout-container">
        <h5>Finalizar Compra</h5>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre y Apellido:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </label>

          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Método de Pago:
            <select
              className="metodo-de-pago"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              required
              disabled={bloquearMetodoPago}
            >
              <option value=""></option>
              {!bloquearMetodoPago || metodoPago === 'contacto' ? (
                <option value="contacto">Credito/Debito/Efectivo (arreglar con el vendedor)</option>
              ) : null}
              {!bloquearMetodoPago || metodoPago === 'mercado_pago' ? (
                <option value="mercado_pago">Mercado Pago</option>
              ) : null}
            </select>
          </label>

          <label>
            Productos:
            <ul className="info-compra-lista">
              {productosEnCarrito.length === 0 ? (
                <li>No hay productos seleccionados.</li>
              ) : (
                productosEnCarrito.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - {producto.cantidad} x {producto.precio} ARS
                  </li>
                ))
              )}
            </ul>
          </label>

          <button type="submit" disabled={mostrarPago}>Confirmar Compra</button>
        </form>
        <br />

        {mostrarPago && metodoPago === 'mercado_pago' && (
          <>
            <div className="total-compra">
              <strong>Total de la compra:</strong> {total.toLocaleString('es-AR')} ARS
            </div>

            <div className="pago-mercado-pago">
              <p>Transferí el monto al alias:</p>
              <p><strong>fran.gigliotti.mp</strong></p>
              <p>o al CVU:</p>
              <p><strong>0000003100012674127433</strong></p>

              <a
                className="link-mercado-pago"
                href="mercadopago://"
                onClick={(e) => {
                  e.preventDefault();
                  const appScheme = "mercadopago://";
                  const fallbackUrl = "https://www.mercadopago.com.ar/";
                  window.location.href = appScheme;
                  setTimeout(() => {
                    window.location.href = fallbackUrl;
                  }, 1000);
                }}
              >
                Ir a pagar ahora 💳
              </a>

              <button
                onClick={() => {
                  vaciarCarrito();
                  navigate('/final');
                }}
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
