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
    --primary-3: #6B385D;
    --primary-4: #783F68;
    --primary-5: #A64960;

    --secundary: #03A39C;

    --white: #FFFFFF;
    --white-2: #F4EDE8;

    --gray: #666360;
    --gray-2: #494846;
    --gray-3: #707070;
    --gray-4: #72716E;

    --error: #be2727;
  }
`;