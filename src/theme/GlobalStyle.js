import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
}

html{
    padding-left:10px;
        font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body{
    padding-left:150px;
    font-size: 1.6rem; // happy rems
    font-family: "Montserrat", sans-serif;
    
}
`;
export default GlobalStyle;
