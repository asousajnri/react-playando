import styled from "styled-components";

import devices from "../../../styles/devices";

export const Container = styled.div`
  height: 6rem;
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;

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

  span {
    opacity: 0;
    bottom: -2rem;
    transition: all 0.3s;

    display: flex;
    position: absolute;
    left: 0;
    height: 5rem;
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #856404;
    width: 100%;
    align-items: flex-end;
    padding: 0 3rem 0.75rem 3rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 1.2rem;
  }
`;
