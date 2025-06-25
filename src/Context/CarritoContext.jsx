import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    const productoExistente = productosEnCarrito.find(item => item.docId  === producto.docId );

    if (productoExistente) {
      setProductosEnCarrito((prev) =>
        prev.map(item =>
          item.docId  === producto.docId 
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setProductosEnCarrito((prev) => [...prev, { ...producto, cantidad }]);
    }

    setCantidadEnCarrito((prev) => prev + cantidad);
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setProductosEnCarrito([]);
    setCantidadEnCarrito(0);
  };

  const calcularTotal = () => {
    const total = productosEnCarrito.reduce((acc, producto) => {
      // Eliminamos los puntos de los precios que vienen como string
      const precioNumerico = parseFloat(producto.precio.toString().replace(/\./g, ''));
      
      if (!isNaN(precioNumerico)) {
        return acc + (precioNumerico * producto.cantidad);
      }
      return acc;
    }, 0);
  
    return total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
  };  
  return (
    <CarritoContext.Provider value={{ productosEnCarrito, cantidadEnCarrito, agregarAlCarrito, vaciarCarrito, calcularTotal }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
