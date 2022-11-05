import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    outline: 0;
  }
  body {
    background-color: #E5E5E5;
  } 

  html {
    font-size: 62.5%;
    height: 100%;
    
  }
  body {
  
   min-height:100%;
   position:relative;

  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyle;