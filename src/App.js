import React from "react";

import useGlobalStates from "./hooks/useGlobalStates";

import GlobalStatesContext from "./contexts/GlobalStatesContext";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import themeOrange from "./styles/theme-orange";

import Header from "./components/Header";
import Modal from "./components/Modal";
import Video from './components/Video';

import { AppContainer, MainVideos } from "./styles";

function App() {
  const states = useGlobalStates();

  return (
    <ThemeProvider theme={themeOrange}>
	    <GlobalStatesContext.Provider value={states}>
	      <AppContainer>
	        <GlobalStyle />
	        <Header />
	        <MainVideos>
		        {states.playList.length > 0 ? (
			        states.playList.map((video, idx) => (
				        <Video 
					        key={video.id}
					        infos={{
						        id: video.id,
						        title: video.title,
						        listNumber: idx,
						        link: video.link,
						        thumbnail: video.thumbnails.high.url
					        }}
						    />
			        ))
			      ) : (<h2>Playlist vazia!</h2>)}
	        </MainVideos>
	      </AppContainer>
	      
	      {states.modalIsOpen && (<Modal />)}
      </GlobalStatesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
