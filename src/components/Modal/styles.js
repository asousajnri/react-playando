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

export const ListVidos = styled.ul`
  border-bottom: 1px solid #efeded;
  overflow-y: scroll;
  max-height: 179px;

  @media ${devices.tabletPortrait} {
    overflow-y: unset;
    max-height: unset;
  }

  li {
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    transition: all 0.3s;
    cursor: pointer;
    border-right: 0;

    &:hover,
    &:nth-child(even):hover,
    &.is-selected {
      border-left: 6px solid ${props => props.theme.colors.primary};
    }

    &:nth-child(even) {
      background: #f7f6f6;
    }
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    transition: all 0.3s;
    max-width: 30rem;
  }

  input {
    margin-right: 1rem;
  }
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 5px;
  width: 5rem;
  height: 5rem;
  margin-right: 1.5rem;

  @media ${devices.tabletPortrait} {
    width: 8rem;
    height: 8rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
