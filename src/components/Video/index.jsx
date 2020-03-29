import React from "react";

import {
  Container,
  Footer,
  Title,
  Number,
  Controls,
  WrapperVideo
} from "./styles";

const Video = ({ videoUrl, numberList, title, thumbnail, play }) => (
  <Container>
    <WrapperVideo>
      <iframe
        className={play && "playing"}
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
        <h2>{title}</h2>
      </Title>
      <Controls>
        <button>
          <i className="far fa-pause-circle"></i>
        </button>
        <button>
          <i className="far fa-trash-alt"></i>
        </button>
      </Controls>
    </Footer>
  </Container>
);

export default Video;
