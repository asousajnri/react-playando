import { useState } from 'react';
import statesPersist from '../utils/statesPersist';

const useGlobalStates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState([]);
  const [playList, setPlaylist] = useState(statesPersist.getPlaylist() || []);
  
  const modalOpen = () => setModalIsOpen(true);
  const modalClose = () => setModalIsOpen(false);
  
  const playListAdd = (newVideos) => {
	  let videos = playList ? [...playList, ...newVideos] : [...newVideos];
	  
	  statesPersist.playlist(videos);
	  setPlaylist(videos);
  }
  
  const playListDelete = (idVideo) => {
	  let videos = [...playList.filter(video => video.id !== idVideo)]
	  
	  setPlaylist(videos);
	  statesPersist.playlist(videos);
  };
  
  return {
    modalIsOpen,
    modalOpen,
    modalClose,
    modalVideos,
    setModalVideos,
    playList,
    playListAdd,
    playListDelete,
  };
};

export default useGlobalStates;
