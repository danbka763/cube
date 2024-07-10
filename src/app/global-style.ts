// globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set core body defaults */
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set core root defaults */
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    justfy-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(268.59deg, #0C0B1E 0.91%, #2A0F3B 51.75%, #0C0B1E 98.52%);
  }

  input {outline:none;}
`;
