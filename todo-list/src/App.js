import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("")

  const addTask = (e) => {
    console.log(e)
    setTask(e)
  }

  return (
    <div className="App">
      <h2>¡Hola programador!</h2>
      <div className="input-container">
        <input placeholder="Ingresa una nueva tarea" className="input" onChange={(e)=> setTask(e.target.value)} value={task} ></input>
        <button onClick={addTask}>Agregar</button>
      </div>
      <div>

      </div>
    </div>
  );
}
