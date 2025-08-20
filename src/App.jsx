// import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Bombillas from './pages/Bombillas';
import Mates from './pages/Mates';
import Termos from './pages/Termos';
import Yerba from './pages/Yerba';
import Bolsos from './pages/Bolsos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CarritoProvider from './Context/CarritoContext';  
import Checkout from './components/Checkout/Checkout';
import FinalScreen from './components/FinalScreen/FinalScreen'
import 'swiper/css';
import 'swiper/css/navigation';




const App = () => {
  return (
    <>
 <CarritoProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/bombillas" element={<Bombillas />} />
          <Route path="/mates" element={<Mates />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/yerba" element={<Yerba />} />
          <Route path="/bolsos" element={<Bolsos />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/final" element={<FinalScreen />} />
        </Routes>
      </Router>
      </CarritoProvider>
    </>
  );
};

export default App;
