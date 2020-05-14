import React from "react";

import Form from "../Form";
import Button from "../Button";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container>
        <Form.Input placeholder="Qual vídeo deseja pesquisar?" />
        <Button type="submit" text="Buscar" primary />
      </Form.Container>

      <Form.Container>
        <Form.Input placeholder="Buscar em seus videos" />
        <Button type="submit" text="Filtrar" grey />
      </Form.Container>
    </Container>
  );
};

export default Header;
