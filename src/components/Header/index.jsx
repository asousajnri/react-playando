import React, { useState } from "react";

import * as youtubeSearch from "youtube-search";
import youtubeOptions from "../../config/youtubeOptions";

import { Container } from "./styles";

import Form from "../Form";

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
              videos: results
            });
          });
          break;
        case "Adicionar":
          await youtubeSearch(textInputSearch, youtubeOptions, function(
            err,
            results
          ) {
            if (err) return console.log(err);

            console.log(results);

            let getCurrentMyVideos = JSON.parse(
              localStorage.getItem("my-videos")
            );

            localStorage.setItem(
              "my-videos",
              JSON.stringify(
                getCurrentMyVideos
                  ? [...getCurrentMyVideos, ...results]
                  : [...results]
              )
            );

            dispatch({
              type: "ADICIONAR_VIDEO",
              videos: JSON.parse(localStorage.getItem("my-videos"))
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

  const handleChangeInputSearch = e => {
    setRequiredInputSearch(false);
    setTextInputSearch(e.target.value);

    if (e.target.value.includes("https://www.youtube.com/watch?v=")) {
      setTextButtonSearch("Adicionar");
    } else {
      setTextButtonSearch("Procurar");
    }
  };

  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSubmit}>
        <Form.Input
          required={requiredInputSearch}
          value={textInputSearch}
          onChange={handleChangeInputSearch}
          placeholder="Link ou título do vídeo"
        />

        <Form.Button type="submit" primary>
          {textButtonSearch}
        </Form.Button>
      </Form.Container>

      <Form.Container>
        <Form.Input placeholder="Palavras-chave" />

        <Form.Button type="submit" grey>
          Filtrar
        </Form.Button>
      </Form.Container>
    </Container>
  );
};

export default Header;
