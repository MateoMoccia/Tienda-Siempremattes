import PropTypes from 'prop-types';
import './ProductoRnd.css';
import { Link } from 'react-router-dom';
import ItemCounter from '../ItemCounter/ItemCounter';
// Importá todo desde 'swiper' para React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Importá Navigation de la forma correcta
import { Navigation } from 'swiper/modules';

const ProductoRnd = ({ docId, imagenes = [], nombre, precio, agregarAlCarrito, sinExtras }) => {
  const producto = { docId, imagenes, nombre, precio };

  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <Swiper
            key={imagenes.length} // Fuerza a que se recalcule cuando cambie el array
            navigation
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
          >
            {imagenes.map((img, index) => (
              <SwiperSlide key={index}>
                <img className='ImagenProductos' src={img} alt={nombre} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3 className='NombreProductos'>{nombre}</h3>
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
        {!sinExtras && <ItemCounter producto={producto} agregarAlCarrito={agregarAlCarrito} />}
        {!sinExtras && (
          <Link to={`/detalle/${docId}`} className='btn-detalles'>
            <p>Ver detalles</p>
          </Link>
        )}
      </div>
    </div>
  );
};

ProductoRnd.propTypes = {
  docId: PropTypes.string.isRequired,
  id: PropTypes.string,
  imagenes: PropTypes.arrayOf(PropTypes.string),
  nombre: PropTypes.string,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  descripcion: PropTypes.string,
  sinExtras: PropTypes.bool,
};

export default ProductoRnd;
