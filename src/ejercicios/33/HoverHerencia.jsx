import { Panel, Rectangle, Component1, Input } from "./styled";

const HoverHerencia = () => {
    return (
    <div>
        <h2>033 – Styled Components: Hover, Herencia, Atributos</h2>

        <Panel>Coloca el cursor aquí</Panel>

        <Rectangle>Rectángulo heredado de Box</Rectangle>

        <Component1 isRight={true}>isRight = true (verde)</Component1>
        <Component1 isRight={false}>isRight = false (rojo)</Component1>

        <Input myMaxLength={5} />
    </div>
    );
};

export default HoverHerencia;
