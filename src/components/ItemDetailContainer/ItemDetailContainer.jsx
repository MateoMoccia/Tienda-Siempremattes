import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Productos } from '../ProductosRndLista/ProductosLista';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (id) {
      const productoEncontrado = Productos.find((p) => p.id === Number(id));
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;