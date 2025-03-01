import React from 'react';
import ProductoRnd from '../ProductoRnd/ProductoRnd';
import './ProductoLista.css';

export const Productos = [
  { id: 1, imagen: "/catalogo-siempremates//img/Mate-camionero1.png", nombre: "Mate camionero de algarrobo con virola de acero inox: ", precio: "25.000", categoria: "Mates" },
  { id: 2, imagen: "/catalogo-siempremates//img/Mate-camionero2.png", nombre: "Mate camionero int calabza con virola de acero", precio: "25.000", categoria: "Mates" },
  { id: 3, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza1.png", nombre: "Mate Imperial int. calabaza con virola de acero inoxidable", precio: "28.500", categoria: "Mates" },
  { id: 4, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza2.png", nombre: "Mate imperial int. calaaza con virola de alpaca ", precio: "34.500", categoria: "Mates" },
  { id: 5, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza3.png", nombre: "Mate imperial int. calabaza con base reforzada y virola de alpaca", precio: "35.500", categoria: "Mates" },
  { id: 6, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza4.png", nombre: "Mate imperial int.calabaza animal print con virola de alpaca", precio: "45.000", categoria: "Mates" },
  { id: 7, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza5.png", nombre: "Mate imperial int. calabaza con base reforzada y virola de alpaca y bolitas de bronce ", precio: "58.000", categoria: "Mates" },
  { id: 8, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza6.png", nombre: "Mate imperial croco int calabaza y base reforzada de alpaca ", precio: "50.000", categoria: "Mates" },
  { id: 9, imagen: "/catalogo-siempremates//img/Mate-imperial-calabaza7.png", nombre: "Mate imperial repujado int. calabaza con virola de alpaca ", precio: "40.000", categoria: "Mates" },
  { id: 10, imagen: "/catalogo-siempremates//img/Mate-torpedo1.png", nombre: "Mate torpedo int. calabaza con virola de alpaca cincelada", precio: "30.000", categoria: "Mates" },
  { id: 11, imagen: "/catalogo-siempremates//img/Mate-torpedo2.png", nombre: "Mate torpedo int. calabaza con virola cincelada", precio: "33.000", categoria: "Mates" },
  { id: 12, imagen: "/catalogo-siempremates//img/Mate-torpedo3.png", nombre: "Mate torpedo int calabza con viorola cincelada y base reforzada de alpaca con pelotitas de bronce ", precio: "57.000", categoria: "Mates" },
  { id: 13, imagen: "/catalogo-siempremates//img/Mate-torpedo4.png", nombre: "Mate torpedo int. acero inox y viola de acero inox ", precio: "23.000", categoria: "Mates" },
  { id: 14, imagen: "/catalogo-siempremates//img/Mate-torpedo5.png", nombre: "Mate torpedo algarrobo y virola de alpaca cincelada", precio: "29.000", categoria: "Mates" },
  { id: 15, imagen: "/catalogo-siempremates//img/Mate-torpedo6.png", nombre: "Mate torpedo animal print int calabaza y virola de alpaca", precio: "45.000", categoria: "Mates" },
  { id: 16, imagen: "/catalogo-siempremates//img/Mate-torpedo7.jpg", nombre: "Mate torpedo virola  y base de alpaca con pelotitas de bronce", precio: "57.000", categoria: "Mates" },
  { id: 17, imagen: "/catalogo-siempremates//img/Mate-torpedo8.jpg", nombre: "Mate torpedo animal print int calabaza y virola de alpaca", precio: "45.000", categoria: "Mates" },
  { id: 18, imagen: "/catalogo-siempremates//img/Mate-imperial-inoxidable.png", nombre: "Mate imperial int. acero inoxidale con virola de acero ", precio: "30.000", categoria: "Mates" },
  { id: 19, imagen: "/catalogo-siempremates//img/Mate-imperial-algarrobo.png", nombre: "Torpedo virola de alpaca cincelada premium", precio: "28.000", categoria: "Mates" },
  

 
  { id: 20, imagen: "/catalogo-siempremates//img/bombilla1.png", nombre: "Bombilla pico de loro de acero inox", precio: "5.000", categoria: "Bombillas" },
  { id: 21, imagen: "/catalogo-siempremates//img/bombilla2.png", nombre: "Bombilla chata de acero inox", precio: "3.500", categoria: "Bombillas" },
  { id: 22, imagen: "/catalogo-siempremates//img/bombilla3.png", nombre: "Bombillon de alpaca premium", precio: "28.500", categoria: "Bombillas" },
  { id: 23, imagen: "/catalogo-siempremates//img/bombilla4.png", nombre: "Bombillon de alpaca club de futrbol", precio: "22.000", categoria: "Bombillas" },
  { id: 24, imagen: "/catalogo-siempremates//img/bombilla5.png", nombre: "Bombillon de alpaca premium con pico de bronce recto. caño labrado con 2 dijes ", precio: "30.000", categoria: "Bombillas" },


  { id: 25, imagen: "/catalogo-siempremates//img/", nombre: "En proceso...", precio: "", categoria: "Termos" },

  { id: 26, imagen: "/catalogo-siempremates//img/", nombre: "En proceso...", precio: "", categoria: "Yerba" },

  { id: 27, imagen: "/catalogo-siempremates//img/Matera1.png", nombre: "Matera 100% cuero negra", precio: "40.000", categoria: "Bolsos" },
  { id: 28, imagen: "/catalogo-siempremates//img/Matera2.png", nombre: "Matera 100% cuero marron claro", precio: "40.000", categoria: "Bolsos" },
  { id: 29, imagen: "/catalogo-siempremates//img/Matera3.png.jpg", nombre: "Canasta cuerina grande premium reforzada con división", precio: "13.000", categoria: "Bolsos" },
  { id: 30, imagen: "/catalogo-siempremates//img/Bolso1.jpg", nombre: "Bolso Matero", precio: "15.000", categoria: "Bolsos" },
  { id: 31, imagen: "/catalogo-siempremates//img/Yerbero1.jpg", nombre: "Yerbero", precio: "5.000", categoria: "Bolsos" },
  { id: 32, imagen: "/catalogo-siempremates//img/Azucarero1.jpg", nombre: "Azucarero", precio: "5.000", categoria: "Bolsos" },





];

const ProductosLista = ({ categoria }) => {
  const productosFiltrados = Productos.filter((producto) => producto.categoria === categoria);

  return (
    <div className="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <ProductoRnd
            key={producto.id}
            id={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            sinExtras={false} // Asegura que el precio y el botón de detalles se muestren
          />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosLista;

