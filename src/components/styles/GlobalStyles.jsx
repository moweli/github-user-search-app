import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Mono", monospace;
}
body {
        background-color: ${({ theme }) => theme.body};
        display: flex;
        place-items: center;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;

    }
`;
