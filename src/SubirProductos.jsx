// import { useEffect } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from './firebase'; // ajustá según tu ruta
// import { productos } from './data/productos'; // este es tu array hardcodeado

// const SubirProductos = () => {
//   useEffect(() => {
//     const subirProductos = async () => {
//       const productosCollection = collection(db, 'productos');

//       for (const producto of productos) {
//         try {
//           await addDoc(productosCollection, producto);
//           console.log('Producto subido:', producto.nombre);
//         } catch (error) {
//           console.error('Error al subir:', producto.nombre, error);
//         }
//       }
//     };

//     subirProductos();
//   }, []);

//   return <p>Subiendo productos a Firestore...</p>;
// };

// export default SubirProductos;
