import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export const GlobalAppStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-image: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);
    color: ${({ theme }) => theme.colors?.secondary?.contrastText};
    font-family: Roboto !important;
    font-style: normal;
    font-weight: 500;
  }
`
