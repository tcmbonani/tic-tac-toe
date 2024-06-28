import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
     * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        background-size: cover;
        ${(props) => props.theme.media.mobile}{
         font-size: 8px;
        }
     }

     body {
     background-color: ${props => props.theme.colors.primary};
     }
    `