import React from 'react';

import withProviders from './HOC/withProviders';

import Header from './components/Header';
import Modal from './components/Modal';
import Video from './components/Video';

import { 
	AppContainer, 
	MainVideos 
} from './styles';

function App({ states }) {
  return (
	  <>
		  <AppContainer>
		    <Header />
		    <MainVideos>
		      {states.playList.length > 0 ? (
		        states.playList.map((video, idx) => (
			        <Video 
				        key={video.id}
				        infos={{
					        id: video.id,
					        title: video.title,
					        listNumber: idx + 1,
					        link: video.link,
					        thumbnail: video.thumbnails.high.url
				        }}
					    />
		        ))
		      ) : (<h2>Playlist vazia!</h2>)}
		    </MainVideos>
		  </AppContainer>
		      
		  {states.modalIsOpen && (<Modal />)}
	  </>
  );
}

export default withProviders(App);
