import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from '../constants/theme';
import Layout from '../components/layout';
import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Wotfard";
    src: url("/fonts/Wotfard-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Wotfard";
    src: url("/fonts/Wotfard-Medium.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Wotfard";
    src: url("/fonts/Wotfard-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Wotfard";
    src: url("/fonts/Wotfard-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Wotfard";
    src: url("/fonts/Wotfard-Thin.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  *{
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.wotfard};
  }
  #__next{
    height: 100%;
  }
  h1,h2,h3,h4,p{
    margin: 0;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;