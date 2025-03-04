import React from 'react';
import './ProductoRnd.css';
import { Link } from 'react-router-dom';

const ProductoRnd = ({ id, imagen, nombre, precio, descripcion, sinExtras }) => {
  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <img src={imagen} alt={nombre} className='ImagenProductos' />
        </div>
        <h3 className='NombreProductos'>{nombre}</h3>
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
        {!sinExtras && (
          <Link to={`/detalle/${id}`} className='btn-detalles'>
            <p>Ver detalles</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductoRnd;