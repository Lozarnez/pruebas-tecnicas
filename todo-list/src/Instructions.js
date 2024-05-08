import React from "react";

export const Instructions = () => {
  return (
    <>
      <h1>Instrucciones</h1>
      <p>
        Trabaja en el archivo <b>/App.js</b>
      </p>
      <ul>
        <li>
          Agrega un elemento input donde el usuario pueda escribir nuevas tareas
        </li>
        <li>Las tareas agregadas deben mostrarse en una lista.</li>
        <li>
          Cada tarea en la lista debe tener un checkbox que permita marcar la
          tarea como completada.
        </li>
        <li>
          Debe haber un botón asociado a cada tarea que permita eliminar esa
          tarea de la lista.
        </li>
      </ul>
    </>
  );
};
