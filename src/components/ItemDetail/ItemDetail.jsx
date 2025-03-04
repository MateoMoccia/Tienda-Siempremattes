import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  return (
    <div className='item-detail-container'>
      <img src={producto.imagen} alt={producto.nombre} className='item-detail-image' />
      <div className='item-detail-info'>
        <h4>{producto.nombre}</h4>
        <p>Precio: {producto.precio}$</p>
        <p className='item-description-titulo'>Descripción del producto</p>
        <p className='item-description'>{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetail;