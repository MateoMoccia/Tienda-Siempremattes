import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carteras from './pages/Carteras';
import Bolsas from './pages/Bolsas';
import Inicio from './pages/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
      <Router > {/* Configuración del basename */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carteras" element={<Carteras />} />
          <Route path="/bolsas" element={<Bolsas />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
  );
};

export default App;
