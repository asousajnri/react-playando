import React, { useState, useRef, useEffect } from "react";

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
  videoUrl,
  id,
  numberList,
  title,
  thumbnail
  // play
}) => {
  const videoToPlay = useRef(null);
  const [play, setPlay] = useState(false);

  const handleDelete = e => {
    let currentListVideos = JSON.parse(localStorage.getItem("playList"));

    localStorage.setItem(
      "playList",
      JSON.stringify([...currentListVideos.filter(video => video.id !== id)])
    );

    dispatch({
      type: "ADICIONAR_VIDEO",
      videos: JSON.parse(localStorage.getItem("playList"))
    });
  };

  const handlePlay = e => {
    setPlay(!play);

    // videoToPlay.current.setAttribute(
    //   "src",
    //   `${videoUrl}?autoplay=${!play ? 1 : 0}`
    // );

    // console.log(videoToPlay.current);
  };

  return (
    <Container>
      <WrapperVideo className={play && "playing"}>
        <iframe
          ref={videoToPlay}
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <img src={thumbnail} alt={title} />
      </WrapperVideo>

      <Footer>
        <Title>
          <Number>{numberList}</Number>
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
