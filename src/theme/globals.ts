import { createGlobalStyle } from "styled-components";

const PlaygroundGlobalStyles = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 0;
    margin: 0;
    background-color: #121212;
    font-family: 'Open Sans', sans-serif;
    padding-bottom: 60px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }

  span: {
    margin: 0;
  }

`;

export default PlaygroundGlobalStyles;
