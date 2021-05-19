import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #1d3557;
    color: #f1faee;
    font-family: 'Roboto', Sans-Serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
