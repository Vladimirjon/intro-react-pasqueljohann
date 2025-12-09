import { useState } from "react";

const Area = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
    <div>
        <h2>023 – Área del Rectángulo</h2>

        <input type="text" onChange={(e) => setA(e.target.value)} placeholder="Ancho" />
        <input type="text" onChange={(e) => setB(e.target.value)} placeholder="Alto" />

      <p>{a * b} m²</p>
    </div>
    );
};

export default Area;
