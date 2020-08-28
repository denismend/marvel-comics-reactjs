import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-background-header: rgba(237, 26, 59, 1);
    --color-line-in-white: #E6E6F0;
    --color-background-footer: #342232;
    --color-info-card: rgb(52, 34, 50, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-white);
    color: var(--color-black);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Bebas Neue', cursive;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
