import React from 'react';
import '../Styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <div className="contacto-info">
        <p><strong>Dirección:</strong> (Se arregla con el vendedor)</p>
        <p><strong>Teléfono:</strong> +54 11-2393-9608</p>
        <p><strong>Correo Electrónico:</strong> francoracing@gmail.com</p>
      </div>
      <div className="contacto-no-form">
        <p>Si deseas ponerte en contacto, por favor envíanos un correo a <strong>francoracing@gmail.com</strong> o llámanos al número proporcionado.</p>
      </div>
    </div>
  );
};

export default Contacto;
