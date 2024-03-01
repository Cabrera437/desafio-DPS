"use client" 

import React, { useState } from 'react';
import FormularioProyecto from '../components/FormularioProyecto';
import Proyecto from '../components/Proyecto';



const Page = () => {
  const [proyectos, setProyectos] = useState([]);

  const handleRegistroProyecto = (nuevoProyecto) => {
    setProyectos([...proyectos, nuevoProyecto]);
  };

  const handleEliminarProyecto = (index) => {
    const nuevosProyectos = [...proyectos];
    nuevosProyectos.splice(index, 1);
    setProyectos(nuevosProyectos);
  };

  const sumarMontoCategoriaA = () => {
    return proyectos
      .filter((proyecto) => proyecto.categoria === 'Ambientales')
      .reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  const sumarMontoCategoriaB = () => {
    return proyectos
      .filter((proyecto) => proyecto.categoria === 'No ambientales')
      .reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  const calcularTotalMonto = () => {
    return proyectos.reduce((total, proyecto) => total + parseFloat(proyecto.monto), 0);
  };

  return (
    <div className='info'>
      <FormularioProyecto onRegistro={handleRegistroProyecto} />

      <div>
       

        <div>
          <h2>Proyectos Ambientales</h2>
          {proyectos
            .filter((proyecto) => proyecto.categoria === 'Ambientales')
            .map((proyecto, index) => (
              <div key={index}>
                <Proyecto proyecto={proyecto} />
                <p>Precio$: ${parseFloat(proyecto.monto)}</p>
                <button onClick={() => handleEliminarProyecto(index)}>Eliminar</button>
                
              </div> 
            ))}
          <p>Total Monto Proyectos Categoría Ambientales:{sumarMontoCategoriaA().toFixed(2)}</p>
        </div>

        <div>
          <h2>Proyectos No ambientales</h2>
          {proyectos
            .filter((proyecto) => proyecto.categoria === 'No ambientales')
            .map((proyecto, index) => (
              <div key={index}>
                <Proyecto proyecto={proyecto} />
                <p>Precio: ${parseFloat(proyecto.monto)}</p>
                
                <button onClick={() => handleEliminarProyecto(index)}>Eliminar</button>
              </div>
            ))}
          <p>Total Monto Proyectos Categoría No ambientales: ${sumarMontoCategoriaB().toFixed(2)}</p>
        </div>

        <div>
          <h2>Total Monto de Todos los Proyectos: ${calcularTotalMonto().toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
