import React, { useContext, useState} from 'react';
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
import '../Styles/Mates.css';

const Mates = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú
const [tipoSeleccionado, setTipoSeleccionado] = useState ("Todos") 
const [materialSeleccionado, setMaterialSeleccionado] = useState ("Todos") 
const [calidadSeleccionado, setCalidadSeleccionado] = useState ("Todos") 


const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú
  };

const closeButton = () => {
    setIsOpen(false); // Cierra el menú
  };

const handleChange1 = (e) => {
    const valorSeleccionado = e.target.value;
    setTipoSeleccionado(valorSeleccionado);
    
      // Cierra el menú con un pequeño retraso para evitar conflictos con la selección
      setTimeout(() => {
        closeButton(); 
      }, 100); // 100ms de retraso
    }
  
const handleChange2 = (e) => {
    const valorSeleccionado = e.target.value;
    setMaterialSeleccionado(valorSeleccionado);
    
      
      setTimeout(() => {
        closeButton(); 
      }, 100); 
    }

    const handleChange3 = (e) => {
    const valorSeleccionado = e.target.value;
    setCalidadSeleccionado(valorSeleccionado);
    
    
      setTimeout(() => {
        closeButton(); 
      }, 100); 
    }

  return (

    
  <>
    <div className="filtros-container">
      <div className="filtro-item">
        <label htmlFor="tipo-select">Tipo de Mate</label>
        <select 
          id="tipo-select"
          value={tipoSeleccionado} 
          onChange={handleChange1} 
          required 
        >
          <option value="Todos">Todos</option>
          <option value="Camionero">Camionero</option>
          <option value="Imperial">Imperial</option>
          <option value="Torpedo">Torpedo</option>
        </select>
      </div>

      <div className="filtro-item">
        <label htmlFor="material-select">Material</label>
        <select 
          id="material-select"
          value={materialSeleccionado} 
          onChange={handleChange2} 
          required 
        >
          <option value="Todos">Todos</option>
          <option value="Madera">Madera</option>
          <option value="Acero">Acero</option>
          <option value="Calabaza">Calabaza</option>
        </select>
      </div>

      <div className="filtro-item">
        <label htmlFor="calidad-select">Calidad</label>
        <select 
          id="calidad-select"
          value={calidadSeleccionado} 
          onChange={handleChange3} 
          required 
        >
          <option value="Todos">Todos</option>
          <option value="Premium">Premium</option>
          <option value="Normal">Normal</option>
        </select>
      </div>
    </div>

    <div>
      <h2>Mates </h2>
      <div className='container-grabado-mates'>
        <p className='GrabadoDeMates'>
          Presentamos nuestra opcion de grabado de mates totalmente personalizado.
          <br />
          Que esperas para contactarnos y obtener el tuyo!!
        </p>
        <img className='ImagenGrabados' src="/img/Grabado-de-mates.png" alt="ImagenGrabados" />
      </div>
      <ProductosLista 
        categoria="Mates" 
        tipoFiltro={tipoSeleccionado}  
        calidadFiltro={calidadSeleccionado} 
        materialFiltro={materialSeleccionado}
      />
    </div>
  </>
)};

export default Mates;
