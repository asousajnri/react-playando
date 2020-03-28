import React, { useState } from "react";

import Button from "../../components/Button";

import { Container, Box, ListVidos, Actions } from "./styles";

const Modal = ({ modalVideos: videos }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = ({ target }) => {
    target.classList.toggle("is-selected");
  };

  return (
    <Container>
      <Box>
        <ListVidos>
          <li onClick={e => handleClick(e)}>
            <img src="https://place-hold.it/300x300" alt="" />
            <h2>Video</h2>
          </li>
          <li onClick={e => handleClick(e)}>
            <img src="https://place-hold.it/300x300" alt="" />
            <h2>Video</h2>
          </li>
          <li onClick={e => handleClick(e)}>
            <img src="https://place-hold.it/300x300" alt="" />
            <h2>Video</h2>
          </li>
          <li onClick={e => handleClick(e)}>
            <img src="https://place-hold.it/300x300" alt="" />
            <h2>Video</h2>
          </li>
        </ListVidos>
        <Actions>
          <Button grey>Sair</Button>
          <Button primary>Adicionar</Button>
        </Actions>
      </Box>
    </Container>
  );
};

export default Modal;
