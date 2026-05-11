import './App.css'
import fotoPerfil from './assets/fotoCV.png';

function App() {
  //Variables
  const nombre = "Ernesto";
  const edad = 21;
  const ciudad = "Palencia";
  const operacion = 5 + 3;

  return (
    <div className='container'>
      <h1 className='card-presentacion'>
        Mi Carta de Presentación
      </h1> 
      <article className='card'>
        <img 
          src={fotoPerfil} 
          className='imagen'
          alt="Fotografía de Ernesto"
          loading='lazy'
        />
        <h2
          className='titulo'>
          Hola soy <span>{nombre}</span>
        </h2>
        <p>Tengo {edad} años</p>
        <p>Mi ciudad es {ciudad}</p>
        
        <p>Resultado de 5+3 es igual a = {operacion}</p> 
      </article>    
    </div>
  )
}

export default App
