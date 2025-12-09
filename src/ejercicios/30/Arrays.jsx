import data from "./data/data.json";

const Arrays = () => {
    return (
    <div>
        <h2>Ejercicio 030 – Arrays</h2>

        {data.map((d) => (
        <p key={d.id}>{d.nombre} – {d.edad} años</p>
        ))}
    </div>
    );
};

export default Arrays;
