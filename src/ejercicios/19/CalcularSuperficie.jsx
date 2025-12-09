import { useRef, useState } from "react";

const CalcularSuperficie = () => {
    const widthRef = useRef();
    const heightRef = useRef();
    const [area, setArea] = useState(0);

    const calcular = () => {
    const w = widthRef.current.value;
    const h = heightRef.current.value;
    setArea(w * h);
    };

return (
    <div>
    <h2>Ejercicio 019 - Calcular Superficie</h2>
    <input type="text" ref={widthRef} placeholder="Ancho" />
    <input type="text" ref={heightRef} placeholder="Alto" />
    <button onClick={calcular}>Enviar</button>
    <p>{area}</p>
    </div>
    );
};

export default CalcularSuperficie;
