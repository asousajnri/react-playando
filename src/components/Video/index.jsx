import React, { useState, useContext, useEffect, memo } from 'react';
import ReactPlayer from 'react-player';

import limitText from '../../utils/limitText';

import GlobalStatesContext from '../../contexts/GlobalStatesContext';

import {
  Container,
  WrapperVideo,
  Footer
} from './styles';

const Video = ({
	infos
}) => {
	const [playVideo, setPlayVideo] = useState(false);
	
	const states = useContext(GlobalStatesContext);
	
	useEffect(() => {		
		if(states.videoIsPlaying === infos.listNumber) {
			setPlayVideo(true);
		} else {
			setPlayVideo(false);
		}
	}, [states.videoIsPlaying]);
	
	const handlePlayVideo = () => {
		states.setVideoIsPlaying(infos.listNumber);
		setPlayVideo(!playVideo);	
	}
	
  return (
  	<Container>
		  <WrapperVideo>
				<ReactPlayer 
					width='100%' 
					height='30rem' 
					playing={playVideo ? true : false}
					url={infos.link} 
				/>
	    </WrapperVideo>
	    <Footer>
		    <div className='Title'>
          <span className='ListNumber'>
	          {infos.listNumber}
	        </span>
          <h2>{limitText(infos.title, 50)}</h2>
        </div>
        <div className='Controls'>
          {playVideo ? (
            <button onClick={handlePlayVideo}>
              <i className="far fa-pause-circle"></i>
            </button>
          ) : (
            <button onClick={handlePlayVideo}>
              <i className="far fa-play-circle"></i>
            </button>
          )}

          <button onClick={() => states.playListDelete(infos.id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
	    </Footer>
  	</Container>
  )
};

export default memo(Video);
