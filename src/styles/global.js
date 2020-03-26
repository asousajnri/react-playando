import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
        line-height: 1;
    }

    body {
        height: 100%;
    }

    html {
        font-size: 61.5%;
    }

    body {
        font-family: "Roboto", Helvetica, sans-serif;
        background: #f4f4f5;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4 {
        font-family: inherit;
        font-size: 2rem;
    }

    input, textarea, select, button {
        font-family: inherit;
    }

    img {
        max-width: 100%;
        display: block;
        backface-visibility: hidden;
    }
`;
