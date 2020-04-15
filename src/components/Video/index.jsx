import React, { useState } from "react";

import ReactPlayer from 'react-player'

import playListStorage from "../../utils/playListStorage";
import limitText from "../../utils/limitText";

import {
  Container,
  Footer,
  Title,
  Number,
  Controls,
  WrapperVideo
} from "./styles";

const Video = ({ 
	dispatch, 
	infos,
	activePlay,
	setActivePlay
}) => {  
  const [play, setPlay] = useState(false);

  const handleDelete = e => {
	  console.log(infos);
	  
    playListStorage.save([
      ...playListStorage.get().filter(video => video.id !== infos.id)
    ]);
    
    console.log(playListStorage.get());

    dispatch({
      type: "PLAY_LIST",
      update: playListStorage.get()
    });
  };
  
  const handlePlay = () => {
	  setActivePlay(infos.numbering);
	  
	  if(activePlay === infos.numbering) {
		 setPlay(true);
	  } else {
		 setPlay(false);
	  }
  };

  return (
    <Container>
      <WrapperVideo className={play && "playing"}>
		<ReactPlayer width="100%" height="30rem" playing={play ? true : false} url={infos.link} />
        <img src={infos.thumbnail} alt={infos.title} />
      </WrapperVideo>

      <Footer>
        <Title>
          <Number>{infos.numbering + 1}</Number>
          <h2>{limitText(infos.title, 50)}</h2>
        </Title>
        <Controls>
          {!play ? (
            <button onClick={e => handlePlay(e)}>
              <i className="far fa-pause-circle"></i>
            </button>
          ) : (
            <button onClick={e => handlePlay(e)}>
              <i className="far fa-play-circle"></i>
            </button>
          )}

          <button onClick={e => handleDelete(e)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </Controls>
      </Footer>
    </Container>
  );
};

export default Video;
