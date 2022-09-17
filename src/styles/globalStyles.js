import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  	width: 100vw;
  	height: 100vh;
	margin: 0;
	line-height: 1;
  	font-family: 'Roboto';
}
`;

export default GlobalStyle;
