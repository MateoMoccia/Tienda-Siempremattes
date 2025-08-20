import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ProductoRnd from '../ProductoRnd/ProductoRnd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './ProductoLista.css';
import { CarritoContext } from '../../Context/CarritoContext';

const ProductosLista = ({ categoria, tipoFiltro, calidadFiltro, materialFiltro }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    async function fetchProductos() {
      const productosCol = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map(doc => {
        const data = doc.data();

        // Convertir las imágenes locales a ruta relativa si no son URLs externas
        const imagenes = (data.imagenes || [data.imagen]).map(img =>
          img?.startsWith('http') ? img : `/img/${img.split('/').pop()}`
        );

        return {
          docId: doc.id,
          ...data,
          imagenes
        };
      });

      setProductos(productosList);
      setLoading(false);
    }

    fetchProductos();
  }, []);

  const productosFiltrados = productos.filter(producto => {
    if (producto.categoria !== categoria) return false;
    if (tipoFiltro !== 'Todos' && producto.tipo !== tipoFiltro) return false;
    if (calidadFiltro !== 'Todos' && producto.calidad !== calidadFiltro) return false;
    if (materialFiltro !== 'Todos' && producto.material !== materialFiltro) return false;
    return true;
  });

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <ProductoRnd
            key={producto.docId}
            docId={producto.docId}
            id={producto.id}
            imagenes={producto.imagenes}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            agregarAlCarrito={agregarAlCarrito}
            sinExtras={false}
          />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

ProductosLista.propTypes = {
  categoria: PropTypes.string,
  tipoFiltro: PropTypes.string,
  calidadFiltro: PropTypes.string,
  materialFiltro: PropTypes.string
};

export default ProductosLista;
