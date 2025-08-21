import React, { useContext, useState, useEffect, useRef } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CarritoSidebar = ({ closeCart }) => {
  const { productosEnCarrito, vaciarCarrito, calcularTotal } = useContext(CarritoContext);

  return (
    <div className="carrito-sidebar-content">
      <h6 className="titulo-carrito">Mi carrito</h6>
      <ul>
        {productosEnCarrito.length === 0 ? (
          <li className="No-tienes">No tienes productos en el carrito</li>
        ) : (
          productosEnCarrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img src={producto.imagenes} alt={producto.nombre} className="carrito-item-img" />
              <span>{producto.nombre} - {producto.cantidad} x {producto.precio} ARS</span>
            </li>
          ))
        )}
      </ul>
      <div className="carrito-total">
        <span>Total: {calcularTotal()}</span>
      </div>
      <div className="carrito-buttons">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <button onClick={closeCart}>Cerrar</button>
      </div>
    </div>
  );
};

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CarritoContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const carritoRef = useRef(null);
  const navigate = useNavigate();

  const toggleCarrito = () => setMostrarCarrito(!mostrarCarrito);

  // Cierra el carrito al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (carritoRef.current && !carritoRef.current.contains(e.target)) {
        setMostrarCarrito(false);
      }
    };
    if (mostrarCarrito) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mostrarCarrito]);

  // Redirige a checkout
  const handleFinalizarCompra = () => {
    if (cantidadEnCarrito > 0) {
      navigate('/checkout');
    } else {
      alert('Ningún producto fue seleccionado aún.');
    }
  };

  return (
    <>
      <button onClick={toggleCarrito} className="boton-carrito">
        <FaShoppingCart size={36} />
        {cantidadEnCarrito > 0 && <span className="carrito-cantidad">{cantidadEnCarrito}</span>}
      </button>

      {mostrarCarrito && (
        <div className="carrito-sidebar" ref={carritoRef}>
          <CarritoSidebar closeCart={toggleCarrito} />
          <div className="carrito-buttons">
            <button onClick={handleFinalizarCompra}>Finalizar compra</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
