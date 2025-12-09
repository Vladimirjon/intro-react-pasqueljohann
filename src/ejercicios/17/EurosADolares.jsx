import { useRef, useState } from "react";

const EurosADolares = () => {
    const eurosRef = useRef();
    const [dolares, setDolares] = useState(0);

    const calcular = () => {
    const valor = eurosRef.current.value;
    setDolares(valor * 2);
    };

    return (
    <div>
    <h2>Ejercicio 017 - Euros a Dólares</h2>
    <input type="text" ref={eurosRef} />
    <button onClick={calcular}>Enviar</button>
    <p>{dolares}</p>
    </div>
    );
};

export default EurosADolares;
