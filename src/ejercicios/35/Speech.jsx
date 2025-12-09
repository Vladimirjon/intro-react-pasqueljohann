import { useState } from "react";
import paragraphs from "./data/romeo-y-julieta.json";
import { Btn, Row } from "./styled";

const Speech = () => {
    const [currentParagraph, setCurrentParagraph] = useState(0);

    const nextParagraph = () => {
    if (currentParagraph !== paragraphs.length - 1) {
        setCurrentParagraph(currentParagraph + 1);
    }
    };

    const prevParagraph = () => {
    if (currentParagraph !== 0) {
        setCurrentParagraph(currentParagraph - 1);
    }
    };

    return (
    <div>
        <h2>035–036 – Memorizar Speech</h2>

        <Row>
        <Btn onClick={prevParagraph}>Anterior</Btn>
        <Btn onClick={nextParagraph}>Siguiente</Btn>
        </Row>

        <p style={{ marginTop: "30px", fontSize: "24px" }}>
        {paragraphs[currentParagraph]}
        </p>
    </div>
    );
};

export default Speech;
