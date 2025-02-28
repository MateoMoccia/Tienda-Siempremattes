import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Bombillas from './pages/Bombillas';
import Mates from './pages/Mates';
import Termos from './pages/Termos';
import Yerba from './pages/Yerba';
import Bolsos from './pages/Bolsos';  // Cambié el nombre de la ruta a Bolsos
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <Router  basename="/catalogo-siempremates">
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/bombillas" element={<Bombillas />} />
        <Route path="/mates" element={<Mates />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/yerba" element={<Yerba />} />
        <Route path="/bolsos" element={<Bolsos />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />

        
      </Routes>
    </Router>
  );
};

export default App;
