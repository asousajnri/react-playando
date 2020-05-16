import styled from "styled-components";

import devices from "../../styles/devices";

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #00000052;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 45rem;
  border-radius: 1rem;
  overflow: hidden;
`;


export const Actions = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;

  @media ${devices.tabletPortrait} {
    flex-direction: row;
    justify-content: center;
  }

  button {
    margin-bottom: 2rem;

    @media ${devices.tabletPortrait} {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    &:last-child {
      margin-bottom: 0;

      @media ${devices.tabletPortrait} {
        margin-right: 0;
      }
    }
  }
`;

export const Message = styled.div`
  background: #fff;
  padding: 4rem 2rem;
  border-bottom: 1px solid #efeded;

  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

export const Instruction = styled.div`
  display: block;
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: #cce5ff;
  color: #004085;
  font-size: 1.4rem;

  &.warning {
    background-color: #fff3cd;
    color: #856404;
  }
`;
