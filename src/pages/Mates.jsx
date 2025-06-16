import React, { useContext } from 'react';
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
import '../Styles/Mates.css';

const Mates = () => {

  return (
    <div>
      <h2>Mates </h2>
      <div className='container-grabado-mates'>
        <p className='GrabadoDeMates'>Presentamos nuestra opcion de grabado de mates totalmente personalizado</p>
                  <img src="/img/Grabado-de-mates.png" alt="ImagenGrabados" />
      </div>
      <ProductosLista categoria="Mates"/>
    </div>
  );
};

export default Mates;
