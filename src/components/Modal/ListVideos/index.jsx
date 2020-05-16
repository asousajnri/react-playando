import React from 'react';

import { Container } from './styles';

import Video from './Video';

const ListVideos = ({ videos }) => {
	return (
		<Container>
			{videos.map(video => (
				<Video key={video.id} video={video} />
			))}
		</Container>
	);
};

export default ListVideos;