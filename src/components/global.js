import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        overscroll-behavior-y: none;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
    `
