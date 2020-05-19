import React, { useRef, useContext, useState } from 'react';

import GlobalStatesContext from '../../contexts/GlobalStatesContext';
import useNotifyFields from '../../hooks/useNotifyFields';

import youtubeSearch from '../../utils/youtubeSearch';

import filterSearch from '../../utils/filterSearch';

import Form from '../Form';
import Button from '../Button';

import { Container } from './styles';

const Header = ({ globalStates }) => {
	// INPUTS REF
  const inputRefSearch = useRef(null);
  const inputRefFilter = useRef(null);
  
  const notifyFieldSearch = useNotifyFields();
  const notifyFieldFilter = useNotifyFields();
  
  const [
  	textButtonSearch, 
  	setTextButtonSearch
  ] = useState('Buscar');
  
  // GLOBAL STATES
  const states = useContext(GlobalStatesContext);

  const handleSearch = (e) => {
	  e.preventDefault();
	  
	  const inputValue = inputRefSearch.current.value;
	  
	  if(inputValue === '') {
		  notifyFieldSearch.setValues('alert', 'Campo não poder estar vázio!')
		  
		  return;
	  }
	  
	  const inputValueIsLink = inputValue.includes('https://www.youtube.com/watch?v=') ? true : false;
	  
    const resultSearchFromYoutube = youtubeSearch(inputValue);
    
		resultSearchFromYoutube((videos) => {
			console.log(videos);
			
			if(videos.length === 0) {
				notifyFieldSearch.setValues('danger', 'Nenhum vídeo encontrado!')
				
				return;
			};
			
			if(inputValueIsLink) {
				notifyFieldSearch.setValues('success', 'Video adicionado com sucesso!')
				states.playListAdd(videos);
			} else {
				states.modalOpen();
				states.setModalVideos(videos);
			}
		});
  };
  
  const handleFilter = (e) => {
	  e.preventDefault();
	  
	  const inputValue = inputRefFilter.current.value;
	  
	  if(!inputValue) return;
	  
	  notifyFieldFilter.setValues('alert', 'Limpar pesquisa!');
	  
	  let playlist = states.statesPersist.getPlaylist();	  
	  states.playListFiltered(filterSearch(inputValue, playlist));
  };
  
  const handleReseteSearch = () => {
	  notifyFieldFilter.visibleOn();
	  states.playListRecovery();
  };
  
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSearch}>
        <Form.Input
        	notifyField={{
	        	text: notifyFieldSearch.text,
	        	type: notifyFieldSearch.type,
	        	visible: notifyFieldSearch.visible,
	        	onClick: () => notifyFieldSearch.visibleOff(),
        	}}
          refInput={inputRefSearch}
          placeholder='Qual vídeo deseja pesquisar?'
        />
        <Button type='submit' text={textButtonSearch} primary />
      </Form.Container>

      <Form.Container onSubmit={handleFilter}>
        <Form.Input
        	notifyField={{
	        	text: notifyFieldFilter.text,
	        	type: notifyFieldFilter.type,
	        	visible: notifyFieldFilter.visible,
	        	onClick: () => handleReseteSearch(),
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
