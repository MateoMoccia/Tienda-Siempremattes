import React from 'react';
import './ItemDetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Importá Navigation de la forma correcta
import { Navigation } from 'swiper/modules';

const ItemDetail = ({ producto }) => {
  return (
    <div className='item-detail-container'>
      <div className='item-detail-images'>
        <Swiper navigation modules={[Navigation]} slidesPerView={1}>
          {producto.imagenes.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={producto.nombre} className='item-detail-image' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
