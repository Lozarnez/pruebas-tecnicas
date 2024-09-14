import { useState } from "react";
import "./App.css";



  
export default function App() {
  const [usuarios, setUsuarios] = useState([])

  async function getData() {
  const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
  
  setUsuarios(data)
  
}
  
  console.log("boton: ", usuarios);
  
  return (<>
    <div className="App">
      <h2>¡Hola programador!</h2>
      <button onClick={getData}>HAZ FETCH</button>
    </div>
   <div>
      
    </div>
    </>
  );
}
