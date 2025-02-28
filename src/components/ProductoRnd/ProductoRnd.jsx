import React from 'react';
import './ProductoRnd.css';
import { Link } from 'react-router-dom';

const ProductoRnd = ({ imagen, nombre, precio, sinExtras }) => {
  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <img src={imagen} alt={nombre} className='ImagenProductos' />
        </div>
        <h3 className='NombreProductos'>{nombre}</h3>
        {/* Mostrar el precio solo si sinExtras es falso */}
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
        
        {/* Mostrar el botón solo si sinExtras es falso */}
        {!sinExtras && (
          <Link to={`/detalle/${nombre}`} className='btn-detalles'>
            <p>Ver detalles</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductoRnd;
