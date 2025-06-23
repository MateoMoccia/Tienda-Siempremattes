import { useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // <-- 🟢 Agregamos getDoc para consultar si ya existe el producto
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
          const docRef = doc(db, 'productos', producto.id.toString());
          const docSnap = await getDoc(docRef); // <-- 🟢 Acá consultamos si ya existe el producto en Firestore

          if (!docSnap.exists()) { // <-- 🟢 Solo subimos el producto si no existe
            await setDoc(docRef, producto);
            console.log('Producto subido:', producto.nombre);
          } else {
            console.log('Producto ya existe, no se sobrescribe:', producto.nombre); // <-- 🟢 Si ya existe, se mantiene intacto
          }
        } catch (error) {
          console.error('Error al subir:', producto.nombre, error);
        }
      }
    };

    subirProductos();
  }, []);

  return null;
};

export default SubirProductos;


//pablitononis//