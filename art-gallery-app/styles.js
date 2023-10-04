import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-red: #E63946;
    --color-grey-green: #F1FAEE;
    --color-cool-grey: #A8DADC;
    --color-blue: #457B9D;
    --color-dark-blue: #1D3557;
    
  }

  body {
    margin: 0 auto;
    font-family: system-ui;
    background-color: var(--color-cool-grey)

  }

`;

