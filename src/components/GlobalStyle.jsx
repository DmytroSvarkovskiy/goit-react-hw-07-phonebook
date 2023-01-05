import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{
   margin-top:50px;
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#010101'; 
  }
`;
