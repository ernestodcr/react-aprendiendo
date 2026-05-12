import { useState } from "react";
import './Formulario.css';
import Listas from "./Listas";

function Formulario() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const borrar = (indexABorrar) => {
    const nuevaLista = listaTareas.filter((elemento, indice) => {
      return indice !== indexABorrar;
    });
    setListaTareas(nuevaLista);
};

  const enviarTarea = (e) => {
    e.preventDefault();
    
    if (tarea.trim() === "") {
      alert("No se permite añadir una tarea vacía.");
      return;
    }

    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  return (
    <div>
      <h2>Añadir Tarea</h2>
      <form onSubmit={enviarTarea}>
        <input 
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea" 
        />
        <button type="submit">Enviar</button> 
      </form>

      <p>Escribiendo: {tarea}</p>

      <Listas tareas={listaTareas} borrar={borrar} />
    </div>
  );
}

export default Formulario;
