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

        {console.log(myVideos)}

        <Header dispatch={dispatch} modal={modal} />
        <MainVideos>
          {myVideos ? (
            myVideos.map((video, idx) => (
              <Video
                id={`video-${video.id}`}
                key={video.id}
                numberList={idx + 1}
                title={video.title}
                videoUrl={video.link}
                thumbnail={video.thumbnails.high.url}
              />
            ))
          ) : (
            <h2>Você ainda não tem vídeos na sua playlist!</h2>
          )}
        </MainVideos>
      </AppContainer>

      {modal.visible && <Modal dispatch={dispatch} videos={modal.videos} />}
    </ThemeProvider>
  );
}

export default App;
