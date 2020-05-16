import { useState } from 'react';
import statesPersist from '../utils/statesPersist';

const useGlobalStates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState([]);
  const [playList, setPlaylist] = useState(statesPersist.getPlaylist() || []);
  
  const modalOpen = () => setModalIsOpen(true);
  const modalClose = () => setModalIsOpen(false);
  
  const addPlaylist = (newVideos) => {
	  let videos = playList ? [...playList, ...newVideos] : [...newVideos];
	  
	  statesPersist.playlist(videos);
	  setPlaylist(videos);
  }

  return {
    modalIsOpen,
    modalOpen,
    modalClose,
    modalVideos,
    setModalVideos,
    playList,
    addPlaylist,
  };
};

export default useGlobalStates;
