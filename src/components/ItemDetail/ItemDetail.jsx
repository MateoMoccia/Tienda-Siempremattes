import React from 'react';
// import ItemCounter from '../ItemCounter/ItemCounter';
import './ItemDetail.css';


const ItemDetail = ({ producto }) => {
    return (
        <div className='item-detail-container'>
            <img src={producto.imagen} alt={producto.nombre} className='item-detail-image' />
            <div className='item-detail-info'>
                <h4>{producto.nombre}</h4>
                <p>Precio: {producto.precio}$</p>
                <p className='item-description-titulo'> Descripcion del producto </p>
                <p className='item-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus distinctio necessitatibus amet in non iste fugit consequatur quod autem id quos, quasi totam harum aliquam accusamus dolor cum pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit omnis voluptatem eos pariatur sed dicta praesentium commodi voluptates doloribus consequuntur esse atque, vitae vel? Eum labore rem ipsa quod.</p>
            </div>
        </div>
    );
};
export default ItemDetail;
