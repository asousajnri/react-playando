import React, { useRef, useContext, useState } from 'react';

import GlobalStatesContext from '../../contexts/GlobalStatesContext';

import youtubeSearch from '../../utils/youtubeSearch';

import filterSearch from '../../utils/filterSearch';

import Form from '../Form';
import Button from '../Button';

import { Container } from './styles';

const Header = ({ globalStates }) => {
	// INPUTS REF
  const inputRefSearch = useRef(null);
  const inputRefFilter = useRef(null);
  
  // POPUP LOG FILTER
  const [
  	logFieldFilter, 
  	setLogFieldFilter
  ] = useState(false);
  
  // POPUP LOG SEARCH
  const [
  	logFieldSearch, 
  	setLogFieldSearch
  ] = useState(false);
  
  const [
  	logFieldSearchText, 
  	setLogFieldSearchText
  ] = useState('Campo não pode ser vázio!')
  
  const [
  	logFieldSearchType, 
  	setLogFieldSearchType
  ] = useState('default');
  
  // 
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
		  setLogFieldSearch(!logFieldSearch);
		  setLogFieldSearchType('alert');
		  
		  return;
	  }
	  
	  const inputValeuIsLink = inputValue.includes('https://www.youtube.com/watch?v=') ? true : false;
	  
    const resultSearchFromYoutube = youtubeSearch(inputValue);
    
		resultSearchFromYoutube((videos) => {
			console.log(videos);
			
			if(videos.length === 0) {
				setLogFieldSearch(!logFieldSearch);
				setLogFieldSearchType('danger');
				setLogFieldSearchText('Nenhum resultado encontrado!');
				
				return;
			};
			
			if(inputValeuIsLink) {
				states.setModalVideos(videos);
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
	  
	  setLogFieldFilter(!logFieldFilter);
	  
	  let playlist = states.statesPersist.getPlaylist();	  
	  states.playListFiltered(filterSearch(inputRefFilter.current.value, playlist));
  };
  
  const handleReseteSearch = () => {
	  setLogFieldFilter(!logFieldFilter);
	  states.playListRecovery();
  };
  
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSearch}>
        <Form.Input
        	logFieldPopup={{
	        	text: logFieldSearchText,
	        	type: logFieldSearchType,
	        	isShow: logFieldSearch,
	        	onClick: () => setLogFieldSearch(!logFieldSearch),
        	}}
          refInput={inputRefSearch}
          placeholder='Qual vídeo deseja pesquisar?'
        />
        <Button type='submit' text={textButtonSearch} primary />
      </Form.Container>

      <Form.Container onSubmit={handleFilter}>
        <Form.Input
        	logFieldPopup={{
	        	text: 'Limpar a pesquisa!',
	        	type: 'default',
	        	isShow: logFieldFilter,
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
