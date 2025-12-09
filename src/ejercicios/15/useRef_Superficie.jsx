import { useRef } from "react";

const UseRefSuperficie = () => {
    const anchoRef = useRef();
    const altoRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
    const ancho = anchoRef.current.value;
    const alto = altoRef.current.value;
    const area = ancho * alto;

    resultadoRef.current.innerHTML = area;
    };

    return (
    <div>
        <h2>Ejercicio 015 – Superficie Rectángulo</h2>

        <input type="text" ref={anchoRef} placeholder="Ancho" />
        <input type="text" ref={altoRef} placeholder="Alto" />
        <button onClick={calcular}>Enviar</button>

        <div ref={resultadoRef}></div>
    </div>
    );
};

export default UseRefSuperficie;
