import { useRef } from "react";

const UseRefGrados = () => {
    const gradosRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
    const valorC = gradosRef.current.value;
    const fahrenheit = valorC * 9/5 + 32;
    resultadoRef.current.innerHTML = fahrenheit;
    };

    return (
    <div>
        <h2>Ejercicio 014 – useRef Grados</h2>

        <input type="text" ref={gradosRef} />
        <button onClick={calcular}>Calcular</button>

        <div ref={resultadoRef}></div>
    </div>
    );
};

export default UseRefGrados;
