import React, { useState } from 'react';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";  // Importamos useNavigate
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [producto, setProducto] = useState(""); 
  const [search, setSearch] = useState(""); 
  const navigate = useNavigate();  // Usamos useNavigate para redirigir

  const handleSearch = () => {
    console.log("Buscando:", search);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setProducto(selectedValue);
    
    // Redirige a la página correspondiente según el valor seleccionado
    if (selectedValue) {
      navigate(`/${selectedValue.toLowerCase()}`);  // Redirige a la ruta basada en la opción seleccionada
    }
  };

  return (
    <header className="HeaderNav">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/quienes-somos">Quiénes Somos?</Link></li>
          <li className="select-container">
            <span>Seleccionar</span>
            <select value={producto} onChange={handleSelectChange} required>
              <option value=""></option>
              <option value="Bombillas">Bombillas</option>
              <option value="Mates">Mates</option>
              <option value="Termos">Termos</option>
              <option value="Yerba">Yerba</option>
              <option value="Bolsos">Bolsos Materos</option>  {/* Cambié a Bolsos */}
            </select>
          </li>
        </ul>

        {/* Imagen centrada en la barra de navegación */}
        <img 
          src="/catalogo-siempremates//img/logo-siempremates.jpg"
          alt="Logo siempremates"
          className="navbar-image"
        />
      </nav>

      {/* Contenedor para la barra de búsqueda */}
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch size={20} color="#F2E8DA" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
