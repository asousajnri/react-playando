import React, { useState } from "react";

import Button from "../../components/Button";

import {
  Container,
  Box,
  ListVidos,
  Actions,
  Thumbnail,
  Message,
  Instruction
} from "./styles";

const Modal = ({ dispatch, videos }) => {
  const msgToInstructions = {
    default: "Selecione o vídeo que você quer adicionar na sua lista!",
    warning: "Nenhum vídeo selecionado!"
  };

  const [selectedVideos, setSelectedVideos] = useState([]);

  const [warning, setWarning] = useState(false);
  const [msgInstruction, setMsgInstruction] = useState(
    msgToInstructions.default
  );

  const isSelected = elem => elem.classList.contains("is-selected");

  const handleClickVideo = (e, video) => {
    e.persist();

    let { target: elemClicked } = e;

    if (elemClicked.tagName === "IMG" || elemClicked.tagName === "H2") {
      elemClicked = e.target.closest("li");
    }

    if (isSelected(elemClicked)) {
      setSelectedVideos([
        ...selectedVideos.filter(item => video.id !== item.id)
      ]);
    } else {
      setSelectedVideos([
        ...selectedVideos.filter(item => video.id !== item.id),
        video
      ]);
    }

    elemClicked.classList.toggle("is-selected");
  };

  const handleSaveVideos = e => {
    if (selectedVideos.length) {
      setWarning(false);
      setMsgInstruction(msgToInstructions.default);

      let getCurrentMyVideos = JSON.parse(localStorage.getItem("my-videos"));

      localStorage.setItem(
        "my-videos",
        JSON.stringify(
          getCurrentMyVideos
            ? [...getCurrentMyVideos, ...selectedVideos]
            : [...selectedVideos]
        )
      );

      dispatch({
        type: "ADICIONAR_VIDEO",
        videos: JSON.parse(localStorage.getItem("my-videos"))
      });

      dispatch({ type: "MODAL" });
    } else {
      setWarning(true);
      setMsgInstruction(msgToInstructions.warning);
    }
  };

  return (
    <Container>
      <Box>
        {videos.length !== 0 && (
          <>
            <ListVidos>
              {videos.map(video => (
                <li key={video.id} onClick={e => handleClickVideo(e, video)}>
                  <Thumbnail>
                    <img src={video.thumbnails.default.url} alt={video.title} />
                  </Thumbnail>
                  <h2>{video.title}</h2>
                </li>
              ))}
            </ListVidos>

            <Instruction className={warning && "warning"}>
              {msgInstruction}
            </Instruction>
          </>
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
          <Button onClick={e => handleSaveVideos(e)} primary>
            Salvar
          </Button>
        </Actions>
      </Box>
    </Container>
  );
};

export default Modal;
