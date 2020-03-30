import React, { useState } from "react";

import playListStorage from "../../utils/playListStorage";
import { modal as modalMsg } from "../../utils/messages";
import { hasClass, toggleClass } from "../../utils/DOM";

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

const Modal = ({ dispatch, resultSearch }) => {
  const [selectedVideos, setSelectedVideos] = useState([]);

  const [modalMessageWarning, setModalMessageWarning] = useState(false);
  const [modalMessages, setModalMessages] = useState(modalMsg.default);

  const handleListItem = (e, video) => {
    e.persist();
    let isSelected = "is-selected";

    let { target: elemClicked } = e;

    if (elemClicked.tagName !== "LI") elemClicked = e.target.closest("li");

    if (hasClass(elemClicked, isSelected)) {
      setSelectedVideos([
        ...selectedVideos.filter(item => video.id !== item.id)
      ]);
    } else {
      setSelectedVideos([
        ...selectedVideos.filter(item => video.id !== item.id),
        video
      ]);
    }

    toggleClass(elemClicked, isSelected);
  };

  const handleSaveVideos = e => {
    if (selectedVideos.length) {
      setModalMessageWarning(false);
      setModalMessages(modalMsg.default);

      playListStorage.save(
        playListStorage.playList
          ? [...playListStorage.playList, ...selectedVideos]
          : [...selectedVideos]
      );

      dispatch({
        type: "ADICIONAR_VIDEO",
        update: playListStorage.playList
      });

      dispatch({ type: "MODAL" });
    } else {
      setModalMessages(modalMsg.warning);
      setModalMessageWarning(true);
    }
  };

  return (
    <Container>
      <Box>
        {resultSearch.length !== 0 && (
          <>
            <ListVidos>
              {resultSearch.map(video => (
                <li key={video.id} onClick={e => handleListItem(e, video)}>
                  <Thumbnail>
                    <img src={video.thumbnails.default.url} alt={video.title} />
                  </Thumbnail>
                  <h2>{video.title}</h2>
                </li>
              ))}
            </ListVidos>

            <Instruction className={modalMessageWarning && "warning"}>
              {modalMessages}
            </Instruction>
          </>
        )}

        {!resultSearch.length && (
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
