import { useState } from "react";
import ComponenteMultiple from "./ComponenteMultiple";

const PropsCondicional = () => {
    const [dato1, setDato1] = useState(0);
    const [dato2, setDato2] = useState(0);

    return (
    <div>
        <h2>Ejercicio 028 – Props + Renderizado Condicional</h2>

        <input type="text" onChange={(e) => setDato1(e.target.value)} />
        <input type="text" onChange={(e) => setDato2(e.target.value)} />

        <ComponenteMultiple opcion={1} dato1={dato1} dato2={dato2} />
        <ComponenteMultiple opcion={2} dato1={dato1} dato2={dato2} />
        <ComponenteMultiple opcion={3} dato1={dato1} dato2={dato2} />
    </div>
    );
};

export default PropsCondicional;
