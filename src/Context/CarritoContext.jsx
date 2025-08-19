import { createContext, useState, useEffect } from "react"; // Importamos funciones de React

export const CarritoContext = createContext(); // Creamos el contexto para el carrito

export const CarritoProvider = ({ children }) => { // Componente que envuelve a la app y proporciona el contexto

  // Estado inicial del carrito: intenta cargarlo desde localStorage si existe
  const [productosEnCarrito, setProductosEnCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito"); // Busca si hay algo guardado en localStorage
    return carritoGuardado ? JSON.parse(carritoGuardado) : []; // Si hay, lo parsea; si no, arranca con array vacío
  });

  // Estado de la cantidad total de productos en el carrito (no ítems únicos, sino sumatoria de cantidades)
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito"); // Intenta recuperar el carrito guardado
    if (carritoGuardado) {
      const carritoParseado = JSON.parse(carritoGuardado); // Si existe, lo parsea
      return carritoParseado.reduce((acc, item) => acc + item.cantidad, 0); // Suma las cantidades de cada producto
    }
    return 0; // Si no hay nada guardado, empieza en 0
  });

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    // Busca si el producto ya está en el carrito (por ID único)
    const productoExistente = productosEnCarrito.find(item => item.docId === producto.docId);

    if (productoExistente) {
      // Si ya está, suma la cantidad al existente
      setProductosEnCarrito((prev) =>
        prev.map(item =>
          item.docId === producto.docId
            ? { ...item, cantidad: item.cantidad + cantidad } // Actualiza cantidad
            : item // Si no es el mismo producto, lo deja igual
        )
      );
    } else {
      // Si no estaba, lo agrega al final del array
      setProductosEnCarrito((prev) => [...prev, { ...producto, cantidad }]);
    }

    // Actualiza el contador total de productos
    setCantidadEnCarrito((prev) => prev + cantidad);
  };

  // Función para vaciar el carrito por completo
  const vaciarCarrito = () => {
    setProductosEnCarrito([]); // Vaciamos el array de productos
    setCantidadEnCarrito(0); // Reiniciamos la cantidad
    localStorage.removeItem("carrito"); // 🧹 Borramos el carrito del localStorage
  };

  // Función para calcular el total del carrito en pesos
  const calcularTotal = () => {
    const total = productosEnCarrito.reduce((acc, producto) => {
      // 🔍 A veces los precios vienen como string con puntos (ej: "12.000"), hay que limpiarlos

      const precioNumerico = parseFloat(                // Convierte el precio a número decimal
        producto.precio.toString()                      // Asegura que sea un string
          .replace(/\./g, '')                           // Reemplaza TODOS los puntos (.) por nada => "12.000" → "12000"
      );

      // Si el resultado es un número válido, lo multiplica por la cantidad y lo suma
      if (!isNaN(precioNumerico)) {
        return acc + (precioNumerico * producto.cantidad);
      }

      return acc; // Si el precio estaba mal, lo saltea
    }, 0); // Valor inicial del acumulador = 0

    // Formatea el número total como moneda argentina (ej: $12.000)
    return total.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    });
  };

  // Este efecto guarda el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }, [productosEnCarrito]); // Se ejecuta solo cuando productosEnCarrito cambia

  // Devolvemos los valores y funciones del contexto
  return (
    <CarritoContext.Provider value={{
      productosEnCarrito,
      cantidadEnCarrito,
      agregarAlCarrito,
      vaciarCarrito,
      calcularTotal
    }}>
      {children} {/* Renderiza los hijos que están dentro del proveedor */}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider; // Exportamos el componente proveedor
