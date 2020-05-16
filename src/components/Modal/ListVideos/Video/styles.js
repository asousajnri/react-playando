import styled from "styled-components";

import devices from "../../../../styles/devices";

export const Container = styled.li`
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