import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--primary);
    color: var(--white);
    -webkit-font-smoothing: antializased;
  }

  body, button, input {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  :root {
    --primary: #552C49;
    --primary-2: #43233A;

    --secundary: #03A39C;

    --white: #FFFFFF;
    --white-2: #F4EDE8;

    --gray: #666360;

    --error: #be2727;
  }
`;