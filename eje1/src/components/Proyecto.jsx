// Proyecto.jsx
import React from 'react';

const Proyecto = ({ proyecto }) => {
  return (
    <div className='card'>
      <h2>Proyecto</h2>
      <p>Categoría: {proyecto.categoria}</p>
      <p>Tipo de Proyecto: {proyecto.tipoProyecto}</p>
      <p>Monto: ${proyecto.monto}</p>
      <p>Fecha: {proyecto.fecha}</p>
      <p>Descripción: {proyecto.descripcion}</p>
    </div>
  );
};

export default Proyecto;
