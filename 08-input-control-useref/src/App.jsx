import { useRef } from 'react';
import './App.css';

function App() {
  const usoRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title">useRef Input Controller</h1>

      <input
        type="text"
        ref={usoRef}
        className="input"
        placeholder="Escribe algo..."
      />

      <div className="buttons">
        <button onClick={() => usoRef.current.focus()}>FOCUS</button>

        <button onClick={() => usoRef.current.value = "Hola, esto lo escribió useRef"}>
          ESCRIBIR
        </button>

        <button onClick={() => usoRef.current.value = ""}>
          BORRAR
        </button>

        <button onClick={() => {
          alert("Mira la consola");
          console.log(usoRef.current.value)
        }}>
          MOSTRAR VALOR
        </button>
      </div>
    </div>
  );
}

export default App;