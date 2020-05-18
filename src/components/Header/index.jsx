import React, { useRef, useContext, useState } from 'react';

import GlobalStatesContext from '../../contexts/GlobalStatesContext';

import youtubeSearch from '../../utils/youtubeSearch';

import filterSearch from '../../utils/filterSearch';

import Form from '../Form';
import Button from '../Button';

import { Container } from './styles';

const Header = ({ globalStates }) => {
  const inputRefSearch = useRef(null);
  const inputRefFilter = useRef(null);
  
  const [logFilter, setLogFilter] = useState(false);
  
  const states = useContext(GlobalStatesContext);

  const handleSubmit = async (e) => {
	  e.preventDefault();
	  
    const modal = youtubeSearch(inputRefSearch.current.value);
    
		modal((videos) => {
			states.modalOpen();
			states.setModalVideos(videos);
		});
  };
  
  const handleFilter = (e) => {
	  e.preventDefault();
	  
	  let playlist = states.statesPersist.getPlaylist();	  
	  states.playListFiltered(filterSearch(inputRefFilter.current.value, playlist));
  };
  
  const handleFilterDelete = (event) => {
	  
  };
  
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSubmit}>
        <Form.Input
          refInput={inputRefSearch}
          placeholder='Qual vídeo deseja pesquisar?'
        />
        <Button type='submit' text='Buscar' primary />
      </Form.Container>

      <Form.Container onSubmit={handleFilter}>
        <Form.Input
        	logPopup={{
	        	text: 'Limpar pesquisa',
	        	type: 'alert',
	        	isShow: true,
	        	clickClose: () => setLogFilter(!logFilter),
        	}}
          refInput={inputRefFilter}
          placeholder='Buscar em seus videos'
        />
        <Button type='submit' text='Filtrar' grey />
      </Form.Container>
    </Container>
  );
};

export default Header;
