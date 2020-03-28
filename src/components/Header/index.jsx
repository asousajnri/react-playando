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
      // alert(modal);
      dispatch({
        type: "MODAL"
      });
    } else {
      setRequiredInputSearch(true);
    }

    /*
	await youtubeSearch(textInputSearch, youtubeOptions, function(err, results) {
      if (err) return console.log(err);
      
      localStorage.setItem("states", JSON.stringify({videos: results}));
    });
    
    console.log(localStorage.getItem("states"));
*/

    // 	console.log("ANTES:", modal);
  };

  const handleChangeInputSearch = e => {
    setRequiredInputSearch(false);
    setTextInputSearch(e.target.value);

    if (e.target.value.includes("https://www.youtube.com/watch?v=")) {
      setTextButtonSearch("adicionar");
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
