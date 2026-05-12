import './Listas.css';

function Listas({ tareas = [], borrar }) {
  return (
    <div className="listas-container">
      {tareas.length > 0 && (
        <>
          <h3 className="listas-titulo">Lista de Tareas:</h3>
          <ul className="listas-ul">
            {tareas.map((item, index) => (
              <li key={index} className="tarea-item">
                <span className="tarea-texto">{item}</span>
                <button 
                  className="btn-eliminar" 
                  onClick={() => borrar(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Listas;
