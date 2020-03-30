import React, { useState } from "react";

import * as youtubeSearch from "youtube-search";
import youtubeOptions from "../../config/youtubeOptions";

import playListStorage from "../../utils/playListStorage";
import filterSearch from "../../utils/filterSearch";
import stringToArray from "../../utils/stringToArray";

import Form from "../Form";

import { Container } from "./styles";

const Header = ({ dispatch }) => {
  const [textButtonSearch, setTextButtonSearch] = useState("Procurar");
  const [textInputSearch, setTextInputSearch] = useState("");
  const [requiredInputSearch, setRequiredInputSearch] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (textInputSearch) {
      switch (textButtonSearch) {
        case "Procurar":
          await youtubeSearch(textInputSearch, youtubeOptions, function(
            err,
            results
          ) {
            if (err) return console.log(err);

            dispatch({
              type: "MODAL",
              update: results
            });
          });
          break;
        case "Adicionar":
          await youtubeSearch(textInputSearch, youtubeOptions, function(
            err,
            results
          ) {
            if (err) return console.log(err);

            playListStorage.save(
              playListStorage.get()
                ? [...playListStorage.get(), ...results]
                : [...results]
            );

            dispatch({
              type: "PLAY_LIST",
              update: playListStorage.get()
            });
          });
          break;
        default:
          return;
      }
    } else {
      setRequiredInputSearch(true);
    }
  };

  const handleInputSearch = ({ target }) => {
    setRequiredInputSearch(false);
    setTextInputSearch(target.value);

    if (target.value.includes("https://www.youtube.com/watch?v=")) {
      setTextButtonSearch("Adicionar");
    } else {
      setTextButtonSearch("Procurar");
    }
  };

  const handleFilter = ({ target }) => {
    dispatch({
      type: "ADICIONAR_VIDEO",
      update: filterSearch(
        stringToArray(target.value),
        playListStorage.playList
      )
    });
  };

  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSubmit}>
        <Form.Input
          required={requiredInputSearch}
          value={textInputSearch}
          onChange={handleInputSearch}
          placeholder="Link ou título do vídeo"
        />

        <Form.Button type="submit" primary>
          {textButtonSearch}
        </Form.Button>
      </Form.Container>

      <Form.Container>
        <Form.Input
          zeroMargin={true}
          placeholder="Filtrar por Palavras-chave"
          onChange={e => handleFilter(e)}
        />
        {/* <Form.Button grey>Filtrar</Form.Button> */}
      </Form.Container>
    </Container>
  );
};

export default Header;
