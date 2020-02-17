import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
 }

 body{
   background-color: #fafafa;
   font: 14px sans-serif;
   -webkit-font-smoothing: atialiased !important;
 }
`;
