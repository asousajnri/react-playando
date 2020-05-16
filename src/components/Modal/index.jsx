import React, { useState, useContext } from "react";

import GlobalStatesContext from "../../contexts/GlobalStatesContext";
import ModalSelectedVideos from "../../contexts/ModalSelectedVideos"; 

import ListVideos from './ListVideos';

import Button from "../Button";

import {
  Container,
  Box,
  Actions
} from "./styles";

const Modal = () => {
	const [selectedVideos, setSelectedVideos] = useState([]);
	
	const states = useContext(GlobalStatesContext);	
	
	const handleSaveInPlaylist = () => {		
		states.addPlaylist(selectedVideos);
		
		states.modalClose();
	};
	
  return (
    <Container>
      <Box>
	      <ModalSelectedVideos.Provider value={{ selectedVideos, setSelectedVideos }}>
	      	<ListVideos videos={states.modalVideos}/>
					<Actions>
	          <Button text="Sair" onClick={() => states.modalClose()} grey />
	          <Button text="Salvar" onClick={() => handleSaveInPlaylist()} primary />
        	</Actions>
        </ModalSelectedVideos.Provider>
      </Box>
    </Container>
  );
};

export default Modal;
