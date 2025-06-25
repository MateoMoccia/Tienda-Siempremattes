// import React from 'react';
import PropTypes from 'prop-types';
import './ProductoRnd.css';
import { Link } from 'react-router-dom';
import ItemCounter from '../ItemCounter/ItemCounter';

const ProductoRnd = ({ docId, imagen, nombre, precio ,agregarAlCarrito, sinExtras }) => {
  const producto = { docId, imagen, nombre, precio }; 
  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <img src={imagen} alt={nombre} className='ImagenProductos' />
        </div>
        <h3 className='NombreProductos'>{nombre}</h3>
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
                {!sinExtras && <ItemCounter producto={producto} agregarAlCarrito={agregarAlCarrito} />}
        {!sinExtras && (
          <Link to={`/detalle/${docId}`} className='btn-detalles'>
            <p>Ver detalles</p>
          </Link>
        )}
      </div>
    </div>
  );
};

ProductoRnd.propTypes = {
  docId: PropTypes.string.isRequired,
  id: PropTypes.string,
  imagen: PropTypes.string,
  nombre: PropTypes.string,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  descripcion: PropTypes.string,
  sinExtras: PropTypes.bool
};
export default ProductoRnd;
