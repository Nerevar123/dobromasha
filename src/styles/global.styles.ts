import { createGlobalStyle } from 'styled-components';

import { Colors } from './colors.styles';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
    min-width: 380px;
    max-width: 1960px;
    margin: 0 auto;
    font-family: Inter, Helvetica, Arial, sans-serif;
    font-size: 14px;
    background-color: ${Colors.background};
    color: ${Colors.black};
    box-sizing: border-box;
    scrollbar-color: ${Colors.lightGray} ${Colors.white};
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  select,
  textarea {
    font-family: inherit;
  }

  button {
    font-family: inherit;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  button, a {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  button:disabled {
    cursor: default;
  }

  button:focus, textarea:focus, input:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    background-color: ${Colors.white};
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    position: absolute;
    background: ${Colors.lightGray};
    border-radius: 3px;
  }
`;
