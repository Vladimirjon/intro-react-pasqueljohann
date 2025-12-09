import { useState, useEffect } from "react";

const UseEffectBasic = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    console.log("Este código se ejecuta al montar el componente");

    return () => {
        console.log("Este mensaje aparece cuando el componente se desmonta");
    };
    }, []);

    return (
    <div>
        <h2>037 – useEffect</h2>

        <p>count = {count}</p>
        <button onClick={() => setCount(count + 1)}>Pulsar</button>
    </div>
    );
};

export default UseEffectBasic;
