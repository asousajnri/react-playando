import React, { useState } from "react";

import Button from "../../components/Button";

import {
  Container,
  Box,
  ListVidos,
  Actions,
  Thumbnail,
  Message
} from "./styles";

const Modal = ({ dispatch, videos }) => {
  const handleClick = ({ target }) => {
    target.classList.toggle("is-selected");
  };

  return (
    <Container>
      <Box>
        {videos.length !== 0 && (
          <ListVidos>
            {videos.map(video => (
              <li key={video.id} onClick={e => handleClick(e)}>
                <Thumbnail>
                  <img src={video.thumbnails.default.url} alt={video.title} />
                </Thumbnail>
                <h2>{video.title}</h2>
              </li>
            ))}
          </ListVidos>
        )}

        {!videos.length && (
          <Message>
            <h2>Nenhum vídeo encontrado!</h2>
          </Message>
        )}
        <Actions>
          <Button onClick={e => dispatch({ type: "MODAL" })} grey>
            Sair
          </Button>
          <Button primary>Adicionar</Button>
        </Actions>
      </Box>
    </Container>
  );
};

export default Modal;
