import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [showText, setShowText] = useState(true)

  return (
    <div className="App">
      <button onClick={ () => { setShowText( !showText) } }>Click on me!</button>
      { showText ? <h2>¡Hola programador!</h2> : null }
    </div>
  );
}
