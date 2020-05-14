import React from "react";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import themeOrange from "./styles/theme-orange";

import Header from "./components/Header";

import { AppContainer, MainVideos } from "./styles";

function App() {
  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header />

        <MainVideos></MainVideos>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
