import React from 'react';
import { Link } from 'react-router-dom';
import './ProductoRnd.css';
// import ItemCounter from '../ItemCounter/ItemCounter';

const ProductoRnd = ({ id, imagen, nombre, precio, agregarAlCarrito, sinExtras }) => {
  const producto = { id, imagen, nombre, precio };  // Creamos el objeto producto para pasar a ItemCounter

  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <img src={imagen} alt={nombre} className='ImagenProductos' />
        </div>
        {/* <h3 className='NombreProductos'>{nombre}</h3>
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
        {!sinExtras && <ItemCounter producto={producto} agregarAlCarrito={agregarAlCarrito} />} */}
        
        {!sinExtras && <Link to={`/detalle/${id}`} className='btn-detalles'>
          <p>Ver detalles</p>
        </Link>}
      </div>
    </div>
  );
};

export default ProductoRnd;
