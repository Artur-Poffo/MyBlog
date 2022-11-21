import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), url(/fonts/roboto.woff2) format('woff2');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
    font-family: Roboto;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }

  *, input, button {
    border: none;
    outline: none;
  }

  a, a:active {
    color: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--background);
    color: var(--textLight);
  }

:root {
  --background: #111111;
  --primary: #996DFF;
  --secondary: #b6b7f6;
  --gradient: linear-gradient(225deg, var(--secondary) 0%, var(--primary) 100%);
  --text: ##B4B4B4;
  --textLight: #FFFF;
  --textDark: #333333;
  --border: #0000;
}
`