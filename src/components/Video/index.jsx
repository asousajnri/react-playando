import React from 'react';

import ReactPlayer from 'react-player';

import limitText from '../../utils/limitText';

import {
  Container,
  WrapperVideo,
  Footer
} from './styles';

const Video = ({
	infos
}) => {
  return (
  	<Container>
		  <WrapperVideo>
				<ReactPlayer width='100%' height='30rem' playing={false} url={infos.link} />
	      <img src={infos.thumbnail} alt={infos.title} />
	    </WrapperVideo>
	    <Footer>
		    <div className='Title'>
          <span className='ListNumber'>
	          {infos.listNumber + 1}
	        </span>
          <h2>{limitText(infos.title, 50)}</h2>
        </div>
	    </Footer>
  	</Container>
  )
};

export default Video;
