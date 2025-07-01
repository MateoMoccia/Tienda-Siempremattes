import React from 'react';
import './FinalScreen.css';

const MensajeFinal = () => {
    return (
         <div className='final-screen'>
              <h5>Gracias por tu compra! </h5>
              <div className='container-grabado-mates'>
<div className="texto-arriba">
Espera el mail de confirmacion para asegurarte que tu compra a sido realizada correctamente
    <br />
    De todas maneras ante cualquier duda, consulta o problema, aqui esta el link hacia nuestras redes, numero y mail
   <br />
   
<a href="http://wa.me/5491123939608" target="_blank" rel="noopener noreferrer" className="link-con-texto">
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="icon"
  />
  http://wa.me/5491123939608
</a>
<br />

<a href="https://www.instagram.com/siempremattes/" target="_blank" rel="noopener noreferrer" className="link-con-texto">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
    alt="Instagram"
    className="icon"
  />
  https://www.instagram.com/siempremattes/
</a>
<br />

<a href="https://www.tiktok.com/@siempremattes" target="_blank" rel="noopener noreferrer" className="link-con-texto">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
    alt="TikTok"
    className="icon"
  />
  https://www.tiktok.com/@siempremattes
</a>
<br />

<div className="link-con-texto">
  <img
    src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
    alt="Email"
    className="icon"
  />
  siempremattes@gmail.com
</div>

</div>
              </div>
            </div>
    )
}
export default MensajeFinal; 