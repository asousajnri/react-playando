import React, { useReducer, useState } from "react";

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
  const [{ modal, playList }, dispatch] = useReducer(reducer, initialState);
  const [activePlay, setActivePlay] = useState(0);

  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header dispatch={dispatch} modal={modal} />

        <MainVideos>
          {playList ? (
            playList.map((video, idx) => (
              <Video
                key={video.id}
              	infos={{
		              id: video.id,
		              numbering: idx,
		              title: video.title,
		              link: video.link,
		              thumbnail: video.thumbnails.high.url
              	}}
              
                activePlay={activePlay}
                setActivePlay={setActivePlay}
                dispatch={dispatch}
              />
            ))
          ) : (
            <h2>Você ainda não tem vídeos na sua playlist!</h2>
          )}
        </MainVideos>
      </AppContainer>

      {modal.visible && <Modal dispatch={dispatch} resultSearch={modal.resultSearch} />}
    </ThemeProvider>
  );
}

export default App;
