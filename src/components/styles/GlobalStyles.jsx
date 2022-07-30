import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
body {
        background-color: ${({ theme }) => theme.body};
        font-family: "Space Mono", monospace;
        margin: 0;
        display: flex;
        place-items: center;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;

    }
`;
