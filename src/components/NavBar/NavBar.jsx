import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import { CarritoContext } from '../../Context/CarritoContext';


const NavBar = () => {
  const [producto, setProducto] = useState(""); 
  const [search, setSearch] = useState(""); 
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obtener la ubicación actual
    const { cantidadEnCarrito } = useContext(CarritoContext);  // Obtener la cantidad del carrito desde el contexto


  const handleSearch = () => {
    console.log("Buscando:", search);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setProducto(selectedValue);
    
    // Redirige a la página correspondiente según el valor seleccionado
    if (selectedValue) {
      navigate(`/${selectedValue.toLowerCase()}`);
      
      // Cierra el menú con un pequeño retraso para evitar conflictos con la selección
      setTimeout(() => {
        closeMenu(); 
      }, 100); // 100ms de retraso
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú
  };

  const closeMenu = () => {
    setIsOpen(false); // Cierra el menú
  };

  // Este useEffect asegura que el menú se mantenga abierto si estamos en una ruta interna
  useEffect(() => {
    // Verifica si la ruta actual es una de las del "select"
    if (
      location.pathname === "/bombillas" ||
      location.pathname === "/mates" ||
      location.pathname === "/termos" ||
      location.pathname === "/yerba" ||
      location.pathname === "/bolsos"
    ) {
      setIsOpen(true); // Si estamos en una ruta interna, mantenemos el menú abierto
    } else {
      setIsOpen(false); // Si estamos fuera de esas rutas, cerramos el menú
    }
  }, [location]); // Este efecto se ejecuta cada vez que la ruta cambia

  return (
    <header className="HeaderNav">
      <nav>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          <li className="select-container">
            <span onClick={closeMenu}>Productos</span> {/* Cierra el menú al hacer clic en "Productos" */}
            <select 
              value={producto} 
              onChange={handleSelectChange} 
              required 
            >
              <option value=""></option>
              <option value="Bombillas">Bombillas</option>
              <option value="Mates">Mates</option>
              <option value="Termos">Termos</option>
              <option value="Yerba">Yerba</option>
              <option value="Bolsos">Bolsos Materos</option>
            </select>
          </li>
        </ul>

        <img 
          src="/img/logo-siempremates.jpg"
          alt="Logo siempremates"
          className="navbar-image"
        />

        {/* Botón de hamburguesa */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </nav>

      <div >
      <CartWidget cantidadProductos={cantidadEnCarrito} />  {/* Pasar la cantidad actual al CartWidget */}
      </div>
    </header>
  );
};

export default NavBar;
