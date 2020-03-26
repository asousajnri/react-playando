import React from "react";

import { Container, Footer, Title, Number, Controls } from "./styles";

const Video = () => (
  <Container>
    <iframe
      src="https://www.youtube.com/embed/HhoATZ1Imtw"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <Footer>
      <Title>
        <Number>1</Number>
        <h2>Conhecendo o Pelando</h2>
      </Title>
      <Controls>
        <button>
          <i class="far fa-pause-circle"></i>
        </button>
        <button>
          <i class="far fa-trash-alt"></i>
        </button>
      </Controls>
    </Footer>
  </Container>
);

export default Video;
