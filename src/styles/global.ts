import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset};

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  :root {
    --min-width: 960px;
    --max-width: 1216px;
    --colors-primary: #47516b;
  }

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: 'Montserrat', 'NotoSansKR', sans-serif;
    overflow-x: hidden;
    font-size: 1rem;
    letter-spacing: -0.4px;
    background-color: rgb(24, 13, 54);
    color: #ffffff;
  }

  html,
  body {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  input {
    outline: none;
  }
`;

export default global;
