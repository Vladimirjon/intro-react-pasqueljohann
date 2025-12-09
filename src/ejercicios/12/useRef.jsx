import { useRef } from "react";

const RecogidaDatos = () => {
    const nombreRef = useRef();
    const resultadoRef = useRef();

    const procesar = () => {
    resultadoRef.current.innerHTML = nombreRef.current.value;
    };

    return (
    <div>
        <h2>Ejercicio 012 – Recogida de datos</h2>

        <input type="text" ref={nombreRef} />
        <button onClick={procesar}>Enviar</button>

        <div ref={resultadoRef}></div>
    </div>
    );
};

export default RecogidaDatos;
