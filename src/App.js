import React, { useReducer } from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import themeOrange from "./styles/theme-orange";

import reducer from "./reducer/reducer";
import initialState from "./reducer/initialState";

import Header from "./components/Header";
import Video from "./components/Video";
import Modal from "./components/Modal";

import { AppContainer, MainVideos } from "./styles";

function App() {
  const [{ modal, myVideos }, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header dispatch={dispatch} modal={modal} />
        <MainVideos>
          {console.log("MY VIDEOS", myVideos)}
          <Video />
          <Video />
          <Video />
          <Video />
        </MainVideos>
      </AppContainer>

      {modal.visible && <Modal dispatch={dispatch} videos={modal.videos} />}
    </ThemeProvider>
  );
}

export default App;
