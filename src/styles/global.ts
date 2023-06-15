// RESET
import { createGlobalStyle } from 'styled-components'
// Estilos globais de modo geral
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: "Inter", sans-serif;
    color: #FFF;
  }

  body {
    background-color: #0e1129;
    padding: 2rem;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`
