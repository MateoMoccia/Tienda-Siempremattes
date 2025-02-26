import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Productos } from '../ProductosRndLista/ProductosLista';  // Asegúrate de que esta importación es correcta
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log("ID recibido de useParams:", id);  // Verifica si el id es correcto
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      const productoEncontrado = Productos.find((p) => p.id === parseInt(id, 10));
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      } else {
        setProducto(null);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
