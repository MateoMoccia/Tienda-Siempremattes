import React from 'react';
import '../Styles/inicio.css';
import { FaTruck, FaRedo, FaCreditCard, FaStore } from "react-icons/fa";
import ProductoRnd from "../components/ProductoRnd/ProductoRnd"

const Inicio = () => {

  const productos = [
    {
      imagen: '/catalogo-siempremates//img/Matera1.png',
      nombre: 'Matera 100% cuero negra',
      precio: 0
    },
    {
      imagen: '/catalogo-siempremates//img/Mate-imperial-calabaza1.png',
      nombre: 'Mate Imperial int. calabaza con virola de acero inox ',
      precio: 0
    },
    {
      imagen: '/catalogo-siempremates//img/Mate-imperial-inoxidable.png',
      nombre: 'Mate imperial int. acero inoxidale con virola de acero ',
      precio: 0
    }
  ];


  return (
    <div className="container">
      <h5>Nuestros mas vendidos! </h5>
      <article className="productos">
        {productos.map((producto, index) => (
          <ProductoRnd
            key={index}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            sinExtras={true}
          />
        ))}
      </article>
      <div className='container-2'>
        <div className='graciasInstagram'>
          <img src="/catalogo-siempremates//img/imagensiempremates.jpg" alt="Imagensiempremates" />
          <div className='textoContainer'>
            <p className='gracias'>Gracias por elegirnos</p>
            <p className='instagramMensaje'>No te olvides de publicar una foto con tu producto etiquetandonos para conseguir un 10% off en tu próxima compra!</p>
            <a href="https://www.instagram.com/siempre.mates__/" className='LinkInstagram' target="_blank">Nuestro Instagram</a>
          </div>

        </div>
        <footer className='contenedor-final'>
          <h3>Contacto</h3>
          <p>francoracing@gmail.com / 11-2393-9608 </p>
          <h3> Métodos de pago</h3>
          <img src="/catalogo-siempremates//img/imagen-visa.png" alt="imagen visa" />
          <img src="/catalogo-siempremates//img/imagen-mercado-pago.jpg" alt="imagen mercado pago" />
          <img src="/catalogo-siempremates//img/imagen-master-card.png" alt="imagen master card" />
          <h3>Nuestras Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/siempre.mates__/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="icon"
              />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="icon"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Inicio;

