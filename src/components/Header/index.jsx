import React, { useRef, useContext, useState } from 'react';

import GlobalStatesContext from '../../contexts/GlobalStatesContext';
import useNotifyFields from '../../hooks/useNotifyFields';

import youtubeSearch from '../../utils/youtubeSearch';

import filterSearch from '../../utils/filterSearch';
import searchIsLink from '../../utils/searchIsLink';

import Form from '../Form';
import Button from '../Button';

import { Container } from './styles';

const Header = ({ globalStates }) => {
  const inputRefSearch = useRef(null);
  const inputRefFilter = useRef(null);
  
  const notifyFieldSearch = useNotifyFields();
  const notifyFieldFilter = useNotifyFields();
  
  const [
  	textButtonSearch, 
  	setTextButtonSearch
  ] = useState('Buscar');
  
  const states = useContext(GlobalStatesContext);
  
  const handleChangeSearch = (e) => {
	  if(searchIsLink(e.target.value)) {
		  setTextButtonSearch('Adicionar');
	  } else {
		  setTextButtonSearch('Buscar');
	  }
  }

  const handleSearch = (e) => {
	  e.preventDefault();
	  
	  const inputValue = inputRefSearch.current.value;
	  
	  if(inputValue === '') {
		  notifyFieldSearch.setValues('alert', 'Campo não poder estar vázio!')
		  
		  return;
	  }
	  
    const resultSearchFromYoutube = youtubeSearch(inputValue);
    
		resultSearchFromYoutube((videos) => {			
			const inputValueIsLink = searchIsLink(inputValue) ? true : false;
			
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
  
  const handleResetePlayList = () => {
	  notifyFieldFilter.visibleOn();
	  states.playListRecovery();
  };
  
  return (
    <Container>
      <h1>Playando</h1>

      <Form.Container onSubmit={handleSearch}>
        <Form.Input
        	onChange={e => handleChangeSearch(e)}
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
	        	onClick: () => handleResetePlayList(),
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
