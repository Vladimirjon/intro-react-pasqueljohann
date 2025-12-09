import { useState } from "react";

const Grades = () => {
    const [c, setC] = useState(0);

    return (
    <div>
        <h2>023 – Conversión °C → °F</h2>
        <input type="text" onChange={(e) => setC(e.target.value)} />
      <p>{c * 9/5 + 32}°F</p>
    </div>
    );
};

export default Grades;
