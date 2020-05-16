import React, { useState, useContext } from 'react';

import ModalSelectedVideos from '../../../../contexts/ModalSelectedVideos';

import { Container, Thumbnail } from './styles';

const Video = ({ video }) => {
	const [isSelected, setIsSelected] = useState(false);
	
	const { selectedVideos, setSelectedVideos } = useContext(ModalSelectedVideos);
	
	const handleIsSelected = () => {
		setIsSelected(!isSelected);
		
		if(isSelected) {
			setSelectedVideos([...selectedVideos.filter(item => video.id !== item.id)])
		} else {
			setSelectedVideos([...selectedVideos.filter(item => video.id !== item.id), video])
		}
	};
	
	return (
		<Container 
			onClick={handleIsSelected} 
			className={ isSelected && 'is-selected' }
		>
			<Thumbnail>
        <img src={video.thumbnails.default.url} alt={video.title} />
      </Thumbnail>
      <h2>{video.title}</h2>
		</Container>
	);
};

export default Video;