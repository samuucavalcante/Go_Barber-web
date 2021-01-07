import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {

  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;
}

body {
  background: #312e38;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
  font-size: 16px;
}


button {
  cursor: pointer;
}

`;
