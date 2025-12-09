import MiComponente from "./MiComponente";

const HijoPadre = () => {

    const changePadre = (param) => {
    alert(param);
    };

    return (
    <div>
        <h2>025 – Props del Hijo al Padre</h2>
        <MiComponente onSomeEvent={changePadre} />
    </div>
    );
};

export default HijoPadre;
