import React, { useContext } from 'react';
import '../Styles/carteras.css';
import ProductosLista from '../components/ProductosRndLista/ProductosLista';

const Carteras = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);  // Obtener la función para agregar al carrito

  return (
    <div>
      <h2>Carteras </h2>
      <ProductosLista categoria="carteras" agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default Carteras;
