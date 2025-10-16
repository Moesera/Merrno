import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
  }

  html, 
  body,
  #root {
    min-height: 100%;
  }

  .App {
    height: 100vh;
  }
  
  html {
    color-scheme: dark light;
    --color-primary: "yellow";
    --color-secondary: "purple";
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  
  body {
    font-family: var(--font-fam);
    color: white;
    font-size: 1.6rem;
    background: #474953;
    margin: 0rem 0.5rem;
  }

  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img,
  picture,
  svg,
  video {
    display: block;
    width: 100%;
    object-fit: center;
  }

  .error {
    background: lightcoral;
    color: red;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .success {
    background: lightgreen;
    color: green;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export default GlobalStyle;
