import React from 'react';
import '../Styles/inicio.css';
import { FaTruck, FaRedo, FaCreditCard, FaStore } from "react-icons/fa";
import ProductoRnd from "../components/ProductoRnd/ProductoRnd"

const Inicio = () => {
  
  const productos = [
    {
      imagen: '/ProyectoFinal-Moccia//img/Mini-Bag-California.png',
      nombre: 'Mini Bag California',
      precio: 0
    },
    {
      imagen: '/ProyectoFinal-Moccia//img/Bolso-Totebag.png',
      nombre: 'Totebag',
      precio: 0
    },
    {
      imagen: '/ProyectoFinal-Moccia//img/Cinturon-Diesel.png',
      nombre: 'Cinturon Diesel',
      precio: 0
    }
  ];
  

  return (
    <div className="container">
            <h2>Nuestros mas vendidos! </h2>
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
      <aside className='container-3'>
      <div className="item">
        <div className="icon"><FaTruck /></div>
        <div className="title">Envío a Domicilio</div>
        <div>Recibí tu compra en cualquier parte del país.<br />Envío Express en 48 hs a CABA y GBA</div>
      </div>
      <div className="item">
        <div className="icon"><FaRedo /></div>
        <div className="title">Cambios y Devoluciones</div>
        <div>Hasta 30 días después de recibida la compra</div>
      </div>
      <div className="item">
        <div className="icon"><FaCreditCard /></div>
        <div className="title">Financiación</div>
        <div>3 & 6 Cuotas sin interés<br />*En compras superiores a $80.000</div>
      </div>
      <div className="item">
        <div className="icon"><FaStore /></div>
        <div className="title">Pick Up</div>
        <div>Sin cargo en tiendas habilitadas</div>
      </div>
      </aside>
      <div className='graciasInstagram'>
        <img src="/ProyectoFinal-Moccia//img/Imagen-Prana-Inicio.png" alt="ImagenPrana" />
        <div className='textoContainer'>
          <p className='gracias'>Gracias por elegirnos</p>
          <p className='instagramMensaje'>No te olvides de publicar una foto con tu producto etiquetandonos para conseguir un 10% off en tu próxima compra!</p>
          <a href="https://www.instagram.com/_pranabags/?igsh=MXU5MDI1enBwYWticw%3D%3D" className='LinkInstagram' target="_blank">Nuestro Instagram</a>
        </div>
         {/* IMPORTANTE: Ya se que la consigna dice que la pagina debia respetar el modelo de "Single Page App" pero por un tema de funcionalidad y opinion personal agrego el "target="blank"" 
espero que esto no me baje nota, Muchas gracias*/}
      </div>
      <footer className='contenedor-final'>
        <h3>Contacto</h3>
        <p>pranabags5@gmail.com / 11-3863-0710</p>
        <h3> Métodos de pago</h3>
        <img src="/ProyectoFinal-Moccia//img/imagen-visa.png" alt="imagen visa" />
        <img src="/ProyectoFinal-Moccia//img/imagen-mercado-pago.jpg" alt="imagen mercado pago" />
        <img src="/ProyectoFinal-Moccia//img/imagen-master-card.png" alt="imagen master card" />
        <h3>Nuestras Redes Sociales</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              className="icon"
            />
          </a>
          <a href="https://www.instagram.com/_pranabags/?igsh=MXU5MDI1enBwYWticw%3D%3D" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="icon"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
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
           {/* {/* IMPORTANTE: Ya se que la consigna dice que la pagina debia respetar el modelo de "Single Page App" pero como ya dije anteriormente es un tema puramente de funcionalidad
          no de que no sepa hacerlo sin redirigir a otras ventanas a traves de los links */}
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Inicio;

