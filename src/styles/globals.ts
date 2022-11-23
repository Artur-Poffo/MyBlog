import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
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
  --contrast: #141920;
  --primary: #996DFF;
  --secondary: #b6b7f6;
  --text: #B4B4B4;
  --textLight: #EEEE;
}
`