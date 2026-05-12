import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [datos,setDatos] = useState([]);

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setDatos(data);
    })
    .catch(error => console.error("Error: " + error));
  }, []);

  return (
    <>
      <h1>Lista de Empleados</h1>
      <ul>
      {datos.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
      </ul>
    </>
  )
}

export default App
