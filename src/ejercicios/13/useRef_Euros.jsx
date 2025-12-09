import { useRef } from "react";

const UseRefEuros = () => {
    const eurosRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
    const eurosValue = eurosRef.current.value;
    const dolares = eurosValue * 2;
    resultadoRef.current.innerHTML = dolares;
    };

    return (
    <div>
        <h2>Ejercicio 013 – useRef Euros</h2>

        <input type="text" ref={eurosRef} />
        <button onClick={calcular}>Enviar</button>
        <div ref={resultadoRef}></div>
    </div>
    );
};

export default UseRefEuros;
