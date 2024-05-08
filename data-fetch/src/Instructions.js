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
          Obtén los usuarios de la API
          https://jsonplaceholder.typicode.com/users
        </li>
        <li>
          Crea un listado con los usuarios obtenidos mostrando solo los campos:{" "}
          <b>username</b> y <b>street</b>.
        </li>
        <li>
          Muestra el mensaje <b>Cargando...</b> hasta que se carguen los datos.
        </li>
        <li>
          Muestra el mensaje <b>No hay datos</b> En caso de que no existan
          datos.
        </li>
      </ul>
      <br />
      <br />
      <hr />
    </>
  );
};
