import { useState } from 'react';
import statesPersist from '../utils/statesPersist';

const useGlobalStates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState([]);
  const [playList, setPlaylist] = useState(statesPersist.getPlaylist() || []);
  const [videoIsPlaying, setVideoIsPlaying] = useState(0);
  
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
  
  const playListFiltered = (value) => {
	  setPlaylist([...value]);
  };
  
  const playListRecovery = () => {
	  setPlaylist(statesPersist.getPlaylist() || []);
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
    playListRecovery,
    playListFiltered,
    videoIsPlaying,
    setVideoIsPlaying,
    statesPersist,
  };
};

export default useGlobalStates;
