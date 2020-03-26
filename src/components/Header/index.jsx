import React from "react";

import { Container } from "./styles";

import Form from "../Form";
import Button from "../Button";

const Header = () => {
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container>
        <Form.Input placeholder="Link ou título do vídeo" />
        <Button primary>Adicionar</Button>
      </Form.Container>

      <Form.Container>
        <Form.Input placeholder="Palavras-chave" />
        <Button grey>Filtrar</Button>
      </Form.Container>
    </Container>
  );
};

export default Header;
