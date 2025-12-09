const ComponenteMultiple = ({ opcion, dato1, dato2 }) => {

    const calculaDolares = () => {
    return <p>Dólares: {dato1 * 2}$</p>;
    };

    const calculaFahrenheit = () => {
    return <p>Grados Fahrenheit: {(dato1 * 9/5 + 32)}°F</p>;
    };

    const calculaSuperficie = () => {
    return <p>Superficie: {dato1 * dato2}m²</p>;
    };

    return (
    <div>
        {opcion === 1 && calculaDolares()}
        {opcion === 2 && calculaFahrenheit()}
        {opcion === 3 && calculaSuperficie()}
    </div>
    );
};

export default ComponenteMultiple;
