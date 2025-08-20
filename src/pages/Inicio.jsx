import React from 'react';
import '../Styles/inicio.css';
import ProductoRnd from "../components/ProductoRnd/ProductoRnd"

const Inicio = () => {

  const productos = [
    {
      imagenes: ['/img/Matera1.png'],
      nombre: 'Matera 100% cuero negra',
      precio: 0
    },
    {
      imagenes: ['/img/Mate-imperial-calabaza1.png'],
      nombre: 'Mate Imperial int. calabaza con virola de acero inox',
      precio: 0
    },
    {
      imagenes: ['/img/Mate-imperial-inoxidable.png'],
      nombre: 'Mate imperial int. acero inoxidable con virola de acero',
      precio: 0
    }
  ];

  return (
    <div className="container">
      <h5>Nuestros más vendidos!</h5>
      <article className="productos">
        {productos.map((producto, index) => (
          <ProductoRnd
            key={index}
            imagenes={producto.imagenes}   // Aquí se pasa el array de imágenes
            nombre={producto.nombre}
            precio={producto.precio}
            sinExtras={true}
          />
        ))}
      </article>

      <div className='container-2'>
        <div className='graciasInstagram'>
          <img src="/img/imagensiempremates.jpg" alt="Imagensiempremates" />
          <div className='textoContainer'>
            <p className='gracias'>Gracias por elegirnos</p>
            <a href="https://www.instagram.com/siempremattes/" className='LinkInstagram' target="_blank">Nuestro Instagram</a>
          </div>
        </div>

        <footer className='contenedor-final'>
          <h3>Contacto</h3>
          <p>siempremattes@gmail.com / 11-2393-9608</p>
          <h3>Métodos de pago</h3>
          <img src="/img/imagen-visa.png" alt="imagen visa" />
          <img src="/img/imagen-mercado-pago.jpg" alt="imagen mercado pago" />
          <img src="/img/imagen-master-card.png" alt="imagen master card" />
          <h3>Nuestras Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/siempremattes/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="icon" />
            </a>
            <a href="http://wa.me/5491123939608" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="icon" />
            </a>
            <a href="https://www.tiktok.com/@siempremattes" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Inicio;
