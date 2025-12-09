import "./estilos.css";

const Estilos = () => {
    const styleInline = {
    color: "blue",
    fontSize: "28px"
    };

    const variableEstilos = {
    color: "purple",
    border: "2px solid purple",
    padding: "10px"
    };

    return (
    <div>
        <h2>Ejercicio 031 – Estilos</h2>

        <h3 className="externo">Estilo con hoja CSS externa</h3>

        <h3 style={styleInline}>Estilo en línea</h3>

        <h3 style={variableEstilos}>Estilo con variable</h3>
    </div>
    );
};

export default Estilos;
