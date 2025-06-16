import { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { productos } from './data/productos';

const SubirProductos = () => {
  useEffect(() => {
    const subirProductos = async () => {
      if (!db) {
        console.error('Firestore "db" no está definido');
        return;
      }

      if (!productos || productos.length === 0) {
        console.error('El array productos está vacío o no definido.');
        return;
      }

      console.log('Subiendo productos, cantidad:', productos.length);

      for (const producto of productos) {
        if (!producto.id) {
          console.error('Producto sin id:', producto);
          continue;
        }

        try {
          console.log('Subiendo:', producto.nombre, 'ID:', producto.id);
          const docRef = doc(db, 'productos', producto.id.toString());
          await setDoc(docRef, producto);
          console.log('Producto subido:', producto.nombre);
        } catch (error) {
          console.error('Error al subir:', producto.nombre, error);
        }
      }
    };

    subirProductos();
  }, []);

  // return <p>Subiendo productos a Firestore...</p>;
};

export default SubirProductos;
