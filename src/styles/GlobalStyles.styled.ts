import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-green-900: hsl(183, 100%, 15%);
    --color-green-400: hsl(172, 67%, 45%);
    --color-green-300: hsl(173, 61%, 77%);
    --color-grey-500: hsl(186, 14%, 43%);
    --color-grey-400: hsl(184, 14%, 56%);
    --color-grey-200: hsl(185, 41%, 84%);
    --color-grey-50: hsl(189, 47%, 97%);
    --color-white: hsl(0, 100%, 100%);
    --color-red: hsl(0, 100%, 50%);

    --bg-color: var(--color-grey-200);
    --error-color: var(--color-red);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg-color);
  }

  body, input, button, a {
    font-family: "Space Mono", monospace;
    font-weight: 700;
    font-style: normal;
  }

  button:focus-visible,
  input:focus-visible {
    outline: 2px solid var(--color-green-400);
    outline-offset: 2px;
  }
`;

export default GlobalStyles;
