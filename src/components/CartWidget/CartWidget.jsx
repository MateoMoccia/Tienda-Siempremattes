import React, { useContext, useState, useEffect, useRef } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa'; // Ícono de FontAwesome



const CarritoSidebar = () => {
  const { productosEnCarrito, vaciarCarrito, calcularTotal } = useContext(CarritoContext);

  return (
    <div className="carrito-sidebar-content">
<h6 className="titulo-carrito">Mi carrito</h6>
      <ul>
        {productosEnCarrito.length === 0 ? (
          <li className='No-tienes'>No tienes productos en el carrito</li>
        ) : (
          productosEnCarrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} className="carrito-item-img" />
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
      </div>
    </div>
  );
};

const Carrito = () => {
  const { cantidadEnCarrito } = useContext(CarritoContext);  // Leer el contador de productos
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const carritoRef = useRef(null); // Referencia para el carrito
  const navigate = useNavigate(); // Inicializa useNavigate

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Cierra el carrito si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        setMostrarCarrito(false);
      }
    };

    if (mostrarCarrito) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mostrarCarrito]);

  // Función para redirigir al checkout
  const handleFinalizarCompra = () => {
      if (cantidadEnCarrito > 0) {
    navigate('/checkout'); // Hay productos, redirige al checkout
  } else {
    alert('Ningún producto fue seleccionado aún.');
  }
  }
  return (
    <div className="carrito-container" ref={carritoRef}>
      <button onClick={toggleCarrito} className="boton-carrito">
  <FaShoppingCart size={36} />
  {cantidadEnCarrito > 0 && (
    <span className="carrito-cantidad">{cantidadEnCarrito}</span>
  )}
</button>

      {mostrarCarrito && <div className="carrito-sidebar">
        <CarritoSidebar />
        <div className="carrito-buttons">
          <button onClick={handleFinalizarCompra}>Finalizar compra</button> {/* Redirige al checkout */}
        </div>
      </div>}
    </div>
  );
};

export default Carrito;


