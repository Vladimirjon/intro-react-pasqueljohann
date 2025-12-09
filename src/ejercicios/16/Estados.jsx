import { useState } from "react";

const Estados = () => {
    const [contador, setContador] = useState(0);

    return (
    <div>
    <h2>Ejercicio 016 - Estados</h2>
    <button onClick={() => setContador(contador + 1)}>+</button>
    <p>{contador}</p>
    </div>
    );
};

export default Estados;
