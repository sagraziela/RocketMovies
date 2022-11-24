import { createGlobalStyle } from "styled-components";
import './theme.js';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.GRAY_800};
        height: 100vh;
        width: 100%;

        overflow-y: hidden;
    }

    body, p, input, textarea, h1, h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-family: 'Roboto Slab', serif;
    }
`;