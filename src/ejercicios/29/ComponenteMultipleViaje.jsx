const ComponenteMultipleViaje = ({ opcion, noches }) => {

    const calculaCosteHotel = () => {
    return <p>Coste alquiler hotel: {noches * 40}€</p>;
    };

    const calculaAlquilerCoche = () => {
    let coste = noches * 30;

    if (noches >= 7) coste -= 50;
    else if (noches >= 3) coste -= 20;

    return <p>Coste alquiler coche: {coste}€</p>;
    };

    return (
    <div>
        {opcion === 1 && calculaCosteHotel()}
        {opcion === 2 && calculaAlquilerCoche()}
    </div>
    );
};

export default ComponenteMultipleViaje;
