import React, { useRef, useContext } from "react";

import GlobalStatesContext from "../../contexts/GlobalStatesContext";

import youtubeSearch from "../../utils/youtubeSearch";

import Form from "../Form";
import Button from "../Button";

import { Container } from "./styles";

const Header = ({ globalStates }) => {
  const inputRefSearch = useRef(null);
  const inputRefFilter = useRef(null);
  
  const { 
	  modalOpen, 
	  setModalVideos, 
	} = useContext(GlobalStatesContext);

  const handleSubmit = async (e) => {
	  e.preventDefault();
	  
    const modal = youtubeSearch(inputRefSearch.current.value);
    
		modal((videos) => {
			modalOpen();
			setModalVideos(videos);
		});
  };

  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSubmit}>
        <Form.Input
          refInput={inputRefSearch}
          placeholder="Qual vídeo deseja pesquisar?"
        />
        <Button type="submit" text="Buscar" primary />
      </Form.Container>

      <Form.Container>
        <Form.Input
          refInput={inputRefFilter}
          placeholder="Buscar em seus videos"
        />
        <Button type="submit" text="Filtrar" grey />
      </Form.Container>
    </Container>
  );
};

export default Header;
