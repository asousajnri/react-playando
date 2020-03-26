import React from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import themeOrange from "./styles/theme-orange";

import Header from "./components/Header";
import Video from "./components/Video";

import { AppContainer, MainVideos } from "./styles";

function App() {
  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header />
        <MainVideos>
          <Video />
          <Video />
          <Video />
          <Video />
        </MainVideos>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
