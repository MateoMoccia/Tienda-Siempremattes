import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext'; 
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { vaciarCarrito } = useContext(CarritoContext); 
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [infoPago, setInfoPago] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Prana dice:\nCompra realizada con éxito!\nNombre: ${nombre}\nEmail: ${email}\nMétodo de pago: ${metodoPago}`);
    
    
    vaciarCarrito();

    setTimeout(() => {
      navigate('/');  
    }, 3000); 
  };

  return (
    <>
      <div className="checkout-container">
        <h5>Finalizar Compra</h5>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre y Apellido:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>

          <label>
            Correo Electrónico:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label >
            Método de Pago:
            <select className='metodo-de-pago' value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} required>
              <option value=""></option>
              <option value="Tarjeta de Crédito">Credito/Debito/Efectivo</option>
              <option value="PayPal">Mercado Pago</option>
              {/* Agregar link para despues llevarlo a mercado pago */}
            </select>
          </label>

          <label>
            Información de la compra:
            {/* PONER LA INFORMACION DE QUE ES LO QUE VA A COMPRAR,PRODUCTOS,ETC */}
            <input type="text" />
          </label>

          <button type="submit">Confirmar Compra</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
