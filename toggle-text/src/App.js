import React, { useState } from "react";
import "./App.css";

export default function App() {
const [visible, setVisible] = useState(true)

  function ocultar() {
    setVisible(!visible);
  }

  return (

    <div className="App">
      <button onClick={ocultar}>Click on me!</button>
      {
      visible ? <h2>¡Hola programador!</h2> : ''}
    </div>
  );
}
