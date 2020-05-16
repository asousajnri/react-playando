import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  
  .Title {
	  display: flex;
	  align-items: center;
	  height: 6rem;
	  padding-right: 1rem;
	
	  h2 {
	    font-size: 1.6rem;
	    max-width: 24rem;
	  }
	}
	
	.ListNumber {
		width: 6rem;
	  height: inherit;
	  background: ${props => shade(0.1, props.theme.colors.primary)};
	  padding: 1rem;
	  margin-right: 2rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-weight: bold;
	}
	
	.Controls {
		height: 6rem;
	  width: 9rem;
	  padding: 0 1rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	
	  button {
	    cursor: pointer;
	    border: none;
	    background: ${props => shade(0.1, props.theme.colors.primary)};
	    height: 3rem;
	    width: 3rem;
	  }
	
	  i {
	    color: #fff;
	    font-size: 1.6rem;
	  }
	}
`;

export const WrapperVideo = styled.div`
  display: flex;
  position: relative;

  &.playing {
    iframe {
      opacity: 1;
    }

    img {
      display: none;
    }
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
