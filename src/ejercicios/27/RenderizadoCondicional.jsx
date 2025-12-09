import { useState } from "react";

const RenderizadoCondicional = () => {
    const [valor, setValor] = useState("");

    return (
    <div>
        <h2>027 – Renderizado Condicional</h2>

        <input
        type="text"
        onChange={(e) => setValor(e.target.value)}
        placeholder="Escribe algo"
        />

        {valor
        ? <div>El valor es: {valor}</div>
        : <div>El valor no existe</div>
        }
    </div>
    );
};

export default RenderizadoCondicional;
