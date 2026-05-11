import './Card.css'

//Componente recibe nombre, edad, ciudad
function Card({nombre, edad, ciudad}) {
  return (
    <div className='card'>
        <article>
            <h2>Hola, soy {nombre}</h2>
            <p>Tengo {edad} años y vivo en {ciudad}</p>
        </article>
    </div>
  )
}

export default Card
