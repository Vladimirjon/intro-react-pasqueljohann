import { useState } from "react";

const ValorConEstado = () => {
    const [valor, setValor] = useState("");

    return (
    <div>
    <h2>Ejercicio 020 - useState en lugar de useRef</h2>
    <input
        type="text"
        onChange={(e) => setValor(e.target.value)}
    />
    <p>{valor}</p>
    </div>
    );
};

export default ValorConEstado;
