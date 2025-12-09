import styled from "styled-components";

// Hover
export const Panel = styled.div`
    background-color: salmon;
    padding: 20px;

    &:hover {
    background-color: palegreen;
    }
`;

// Herencia
export const Box = styled.div`
    background-color: orange;
    padding: 20px;
`;

export const Rectangle = styled(Box)`
    width: 200px;
`;

// Props en estilos
export const Component1 = styled.div`
    background-color: ${({ isRight }) => (isRight ? "green" : "red")};
    color: white;
    padding: 10px;
`;

// Props en atributos
export const Input = styled.input.attrs((props) => ({
    type: "password",
    maxLength: props.myMaxLength || 10,
}))`
    color: blue;
    padding: 5px;
    margin-top: 10px;
`;
