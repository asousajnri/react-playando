import React, { useEffect, useReducer } from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import * as youtubeSearch from "youtube-search";
import youtubeOptions from "./utils/youtubeOptions";

import themeOrange from "./styles/theme-orange";

import reducer from "./reducer/reducer";
import initialState from "./reducer/initialState";

import Header from "./components/Header";
import Video from "./components/Video";
import Modal from "./components/Modal";

import { AppContainer, MainVideos } from "./styles";

function App() {
  const [{ modal }, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header dispatch={dispatch} modal={modal} />
        <MainVideos>
          <Video />
          <Video />
          <Video />
          <Video />
        </MainVideos>
      </AppContainer>

      {modal && <Modal />}
    </ThemeProvider>
  );
}

export default App;
