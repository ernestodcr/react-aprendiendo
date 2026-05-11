import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  let texto = "Contador: " + count
  let color = "#222"

  if (count > 0) {
    texto = "Valor positivo: " + count
    color = "green"
  }

  const cambiarContador = (valor) => {
    setCount(prev => {
      const nuevoValor = prev + valor

      if (nuevoValor < 0) {
        return prev
      }

      return nuevoValor
    })
  }

  const reset = () => setCount(0)

  const doblarValor = () => setCount(prev => prev * 2)

  return (
    <>
      <div className="principal">
        <button className="btn-negative" onClick={() => cambiarContador(-1)}>-1</button>

        <p id="show_count" style={{ color }}>
          {texto}
        </p>

        <button className="btn-positive" onClick={() => cambiarContador(1)}>+1</button>
      </div>

      <div className="secundario">
        <button className="btn-neutral" onClick={reset}>Reset</button>
        <button className="btn-positive" onClick={() => cambiarContador(5)}>+5</button>
        <button className="btn-negative" onClick={() => cambiarContador(-5)}>-5</button>
        <button className="btn-neutral" onClick={doblarValor}>x2</button>
      </div>
    </>
  )
}

export default Counter