
import React, { useContext } from 'react';
import '../Styles/bolsas.css'
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
const Bolsas = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  return (
    <div>
      <div>
      <h2>Bolsas</h2>
      <ProductosLista categoria="bolsas" agregarAlCarrito={agregarAlCarrito} /> {/* Solo muestra carteras */}
    </div>
    </div>
  )
}

export default Bolsas
