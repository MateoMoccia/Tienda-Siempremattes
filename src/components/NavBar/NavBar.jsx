import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="HeaderNav">
      <h1>Prana</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/carteras">Carteras</Link></li>
          <li><Link to="/bolsas">Bolsas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

