import React, { useEffect, useState } from 'react';
import ProductoRnd from '../ProductoRnd/ProductoRnd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Ajustá la ruta si hace falta
import './ProductoLista.css';

const ProductosLista = ({ categoria }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductos() {
      const productosCol = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id, // id generado por firestore
        ...doc.data()
      }));
      setProductos(productosList);
      setLoading(false);
    }

    fetchProductos();
  }, []);

  // Filtrás productos por categoría (igual que antes)
  const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <ProductoRnd
            key={producto.id}
            id={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            sinExtras={false}
          />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosLista;
