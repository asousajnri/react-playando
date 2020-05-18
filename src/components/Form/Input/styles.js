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

  ${props =>
    props.zeroMargin &&
    css`
      margin: 0;

      @media ${devices.tabletLandscape} {
        margin: 0;
      }
    `}

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
    background: #cce5ff;
    border: 1px solid #b8daff;
    display: flex;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 3rem;
    right: 2%;
    color: #004085;
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    
    &.is-active {
	    opacity: .5;
	    
	    &:hover {
		    opacity: 1;
		  }
	  }
    
    p {
	    margin-right: 1rem;
    }
    
    span {
	    border: 1px solid #b8daff;
	    cursor: pointer;
	    display: flex;
	    width: 2rem;
	    height: 2rem;
	    background: transparent;
	    border-radius: 50%;
	    align-items: center;
	    justify-content: center;
	    color: #004085;
	    font-weight: bold;
    }
`;
