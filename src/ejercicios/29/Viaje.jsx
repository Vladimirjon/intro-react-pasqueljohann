import { useState } from "react";
import ComponenteMultipleViaje from "./ComponenteMultipleViaje";

const Viaje = () => {
    const [dias, setDias] = useState(0);

    return (
    <div>
        <h2>Ejercicio 029 – Viaje</h2>

        <input
        type="text"
        onChange={(e) => setDias(e.target.value)}
        placeholder="Días de estancia"
        />

        <ComponenteMultipleViaje opcion={1} noches={dias} />
        <ComponenteMultipleViaje opcion={2} noches={dias} />
    </div>
    );
};

export default Viaje;
