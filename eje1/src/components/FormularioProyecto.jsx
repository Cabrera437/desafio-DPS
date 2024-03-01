import React, { useState } from 'react';

const FormularioProyecto = ({ onRegistro }) => {
  const [categoria, setCategoria] = useState('');
  const [tipoProyecto, setTipoProyecto] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegistro = () => {
    const nuevoProyecto = { categoria, tipoProyecto, monto, fecha, descripcion };
    onRegistro(nuevoProyecto);

    // Limpiar los campos después del registro
    setCategoria('');
    setTipoProyecto('');
    setMonto('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <div>
      <label>Categoría:</label>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
      <option value=""></option>
        <option value="Ambientales">Ambientales</option>
        <option value="No ambientales">No ambientales</option>
       
        
      </select>

      <label>Tipo de Proyecto:</label>
      <select value={tipoProyecto} onChange={(e) => setTipoProyecto(e.target.value)}>
        <option value="Alimentación">Alimentacion</option>
        <option value="Vivienda">Vienda</option>
        <option value="Desarrollo de Software">Desarrollo de Software</option>
        <option value="Campaña de Marketing">Campaña Marketing</option>
      </select>

      <label>Monto:</label>
      <input
        type="text"
        pattern="[0-9]*"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <label>Fecha:</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

      <label>Descripción:</label>
      <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

      <button onClick={handleRegistro}>Registrar</button>
    </div>
  );
};

export default FormularioProyecto;
