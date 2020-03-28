import React, { useState } from "react";

import * as youtubeSearch from "youtube-search";
import youtubeOptions from "../../utils/youtubeOptions";

import { Container } from "./styles";

import Form from "../Form";
import Button from "../Button";

const Header = ({ dispatch, modal }) => {
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
