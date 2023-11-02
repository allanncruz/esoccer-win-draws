import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle<{}>`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }

  body {
    font-size: 16px;
  }
`;

export default GlobalStyle;