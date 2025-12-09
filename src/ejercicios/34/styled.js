import styled, { css, createGlobalStyle } from "styled-components";

// Código reutilizable
export const BigText = css`
    font-size: 3rem;
`;

export const RedText = styled.p`
    background: red;
    ${BigText}
`;

export const BlueText = styled.p`
    background: blue;
    ${BigText}
`;

// Media queries
const desktopStartWidth = 996;

export const Box = styled.div`
    width: 100%;
    height: 300px;
    background-color: pink;

    @media (min-width: ${desktopStartWidth}px) {
    background-color: lightgreen;
    }

    @media (max-width: ${desktopStartWidth}px) {
    background-color: lightblue;
    }
`;

// Global styles
export const GlobalBody = createGlobalStyle`
    body {
    background-color: salmon;
    }
`;
