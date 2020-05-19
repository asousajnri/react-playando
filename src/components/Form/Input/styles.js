import styled, { css } from "styled-components";

import devices from "../../../styles/devices";

export const Container = styled.div`
  height: 6rem;
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;

  &.is-required {
    margin-bottom: 4rem;

    @media ${devices.tabletLandscape} {
      margin-bottom: 0;
    }

    span {
      opacity: 1;
      bottom: -2.5rem;
    }
  }

  @media ${devices.tabletLandscape} {
    margin-bottom: 0;
    margin-right: 2rem;
  }

  input {
    position: relative;
    z-index: 2;
    background: #fff;
    width: 100%;
    padding: 1rem 3rem;
    font-size: 1.8rem;
    border: 2px solid #333;
    border-radius: 3rem;
    height: 6rem;
  }
`;

export const LogInput = styled.div`
    opacity: 0;
    position: absolute;
		z-index: 10;
    
    border: 1px solid transparent;
    display: flex;
    padding: 0 0.7rem 0 2rem;
    height: 4.1rem;
    border-radius: 3rem;
    right: 2%;
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    pointer-events: none;
    
    ${props => props.type === 'default' && css`
    	background: #cce5ff;
    	color: #004085;
    	border-color: #b8daff;
    	
    	i {
	    	color: #004085;
    	}
    `}
    
    ${props => props.type === 'alert' && css`
    	color: #856404;
	    background-color: #fff3cd;
	    border-color: #ffeeba;    	
    	i {
	    	color: #856404;
    	}
    `}
    
    ${props => props.type === 'danger' && css`
    	color: #721c24;
	    background-color: #f8d7da;
	    border-color: #f5c6cb;
    	
    	i {
	    	color: #721c24;
    	}
    `}
    
    &.is-active {
	    opacity: .5;
	    pointer-events: all;
	    
	    &:hover {
		    opacity: 1;
		  }
	  }
    
    p {
	    text-align: center;
    }
    
    i {
	    font-size: 2.5rem;
	    margin-left: 1rem;
	    cursor: pointer;
    }
`;
