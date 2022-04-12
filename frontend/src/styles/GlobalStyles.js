import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
  --bg: #100e1d;
  --bg-secondary: #1e213a;
  --bg-btn: #6e707a;
  --text: #e7e7eb;
  --text-secondary: #a09fb1;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Raleway", sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}
button {
  all: unset;
}
img {
    width: 100%;
  }
`;
