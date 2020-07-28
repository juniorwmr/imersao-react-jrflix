import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    color: var(--white);
    text-decoration: none;
  }

  :root {
    --primary: #2A7AE4;
    --black: #000;
    --blackLighter: #9E9E9E;
    --grayLighter: #F5F5F5;
    --grayMedium: #e5e5e5;
    --white: #FFF;
    --frontEnd: #68D1FF;
    --backEnd: #00C86F;
  }

  #root {
    display: flex;
    flex-direction: column;
    color: var(--black);
  }

  *, button, input {
    border: 0;
    background: none;
    
  }

  html {
    background: #141414;
  }
`;
