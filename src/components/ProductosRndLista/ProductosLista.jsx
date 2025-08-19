import React, { useEffect, useState, useContext  } from 'react';
import PropTypes from 'prop-types';
import ProductoRnd from '../ProductoRnd/ProductoRnd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './ProductoLista.css';
import { CarritoContext } from '../../Context/CarritoContext';


const ProductosLista = ({ categoria, tipoFiltro, calidadFiltro, materialFiltro  }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    async function fetchProductos() {
      const productosCol = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map(doc => ({
        docId: doc.id, // ✅ ID generado por Firebase
        ...doc.data() // 👈 Incluye el campo "id" interno si lo tenés en el documento
      }));
      setProductos(productosList);
      setLoading(false);
    }

    fetchProductos();
  }, []);

  const productosFiltrados = productos.filter(producto => {
    if (producto.categoria !== categoria) return false;

  if (tipoFiltro !== "Todos" && producto.tipo !== tipoFiltro) return false; 
 
  if (calidadFiltro !== "Todos" && producto.calidad !== calidadFiltro) return false; 

  if (materialFiltro !== "Todos" && producto.material !== materialFiltro) return false; 

    return true


    
  });

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <ProductoRnd
            key={producto.docId}
            docId={producto.docId} // 👈 Se usa para navegar
            id={producto.id}       // 👈 Este sigue existiendo y se puede mostrar
            imagen={producto.imagen}
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
}

export default ProductosLista;
