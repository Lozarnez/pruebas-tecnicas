import "./App.css";
import { useEffect, useState } from "react";

export default function App() {

  const [datos, setDatos] = useState()

  const getData = async () => {
   
    let data = await fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
      (data.json().then(res => {
        console.log(res)
        let arreglo = []
        for (let i = 0; i < res.length; i++) {
          let user = { username: res[i].username, street: res[i].address.street }
          console.log(user)
          arreglo.push(user)
        }
        console.log("Arreglo", arreglo)
        setDatos(arreglo)
      }))
    })
  }

  useEffect(() => {
    getData()
  },[]
  )
  
  console.log(datos)

 

  return (
    <div className="App">
      <h2>¡Hola programador!</h2>
      <button>HAZ FETCH</button>
    </div>
  );
}
