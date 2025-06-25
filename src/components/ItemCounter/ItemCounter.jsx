import { useState } from "react";
import './ItemCounter.css'; 

const ItemCounter = ({ producto, agregarAlCarrito }) => {
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarritoHandler = () => {
    if (cantidad > 0) {
      agregarAlCarrito(producto, cantidad);  // Pasamos el producto y cantidad al carrito
      setCantidad(0);  // Reseteamos el contador
    }
  };

  return (
    <div className="contador-container">
      <div className="botones-container">
        <button onClick={() => cantidad < 5 && setCantidad(cantidad + 1)}>+</button>
        <span className="cantidad"> {cantidad} </span>
        <button onClick={() => cantidad > 0 && setCantidad(cantidad - 1)}>-</button>
       
        <button onClick={agregarAlCarritoHandler}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCounter;
