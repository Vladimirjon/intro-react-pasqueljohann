import { useState } from "react";

const Dollars = () => {
    const [euros, setEuros] = useState(0);

    return (
    <div>
        <h2>022 – Euros a Dólares</h2>

        <input
        type="text"
        onChange={(e) => setEuros(e.target.value)}
        />

      <p>{euros * 2}$</p>
    </div>
    );
};

export default Dollars;
