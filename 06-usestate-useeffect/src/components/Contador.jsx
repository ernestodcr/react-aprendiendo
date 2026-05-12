import React, { useState, useEffect } from 'react';
import './Contador.css';

function Contador() {
    const [contador, setContador] = useState(0);

    let colorTexto = "#2d3436";
    if (contador < 0) colorTexto = "#d63031";
    else if (contador > 0) colorTexto = "#00b894";

    const modificarContador = (valor) => {
        setContador((prev) => prev + valor);
    }

    useEffect(() => {
        document.title = "Contador: " + contador;
    }, [contador]);

    return (
        <div className='container'>
            <div className='card'>
                <h1 className="title">Contador Pro</h1>
                <p className="number" style={{ color: colorTexto }}>{contador}</p>

                <div className="button-group">
                    <button className="btn btn-sub" onClick={() => modificarContador(-1)}>−</button>
                    <button className="btn btn-add" onClick={() => modificarContador(1)}>+</button>
                </div>
                
                <button className="btn-reset" onClick={() => setContador(0)}>Resetear</button>
            </div>
        </div>
    );
}

export default Contador;
