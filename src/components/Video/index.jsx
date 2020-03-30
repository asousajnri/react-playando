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
	link, 
	id, 
	numbering, 
	title, 
	thumbnail,
	activePlay,
	setActivePlay
}) => {  
  const [play, setPlay] = useState(false);

  const handleDelete = e => {
    playListStorage.save([
      ...playListStorage.playList.filter(video => video.id !== id)
    ]);

    dispatch({
      type: "ADICIONAR_VIDEO",
      videos: playListStorage.playList
    });
  };
  
  const handlePlay = () => {
	  setActivePlay(numbering);
	  
	  if(activePlay === numbering) {
		 setPlay(true);
	  } else {
		 setPlay(false);
	  }
  };

  return (
    <Container>
      <WrapperVideo className={play && "playing"}>
		<ReactPlayer width="100%" height="30rem" playing={play ? true : false} url={link} />
        <img src={thumbnail} alt={title} />
      </WrapperVideo>

      <Footer>
        <Title>
          <Number>{numbering + 1}</Number>
          <h2>{limitText(title, 50)}</h2>
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
