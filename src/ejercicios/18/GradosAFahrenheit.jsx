import { useRef, useState } from "react";

const GradosAFahrenheit = () => {
    const gradosCRef = useRef();
    const [gradosF, setGradosF] = useState(0);

    const calcular = () => {
    const valor = gradosCRef.current.value;
    setGradosF(valor * 9/5 + 32);
    };

    return (
    <div>
    <h2>Ejercicio 018 - °C a °F</h2>
    <input type="text" ref={gradosCRef} />
    <button onClick={calcular}>Calcular</button>
    <p>{gradosF}</p>
    </div>
    );
};

export default GradosAFahrenheit;
