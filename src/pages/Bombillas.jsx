import React, { useContext } from 'react';
import ProductosLista from '../components/ProductosRndLista/ProductosLista';

const Bombillas = () => {

  return (
    <div>
      <h2>Bombillas </h2>
      <ProductosLista categoria="Bombillas"/>
    </div>
  );
};

export default Bombillas;
