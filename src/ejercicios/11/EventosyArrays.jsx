const EventosArrays = () => {
    const btnPulsado = () => {
    alert("hola");
    };

    const numeros = [1, 3, 5, 7];

    return (
    <div>
        <h2>Ejercicio 011 – Eventos y Arrays</h2>

        <button onClick={btnPulsado}>Púlsame</button>

        <h3>Números del array:</h3>
        {numeros.map((n, key) => (
        <p key={key}>{n}</p>
        ))}
    </div>
    );
};

export default EventosArrays;
