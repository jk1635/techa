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

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Montserrat', 'NotoSansKR', sans-serif;
    font-size: 1rem;
    letter-spacing: -0.4px;
    line-height: 1;
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default global;
