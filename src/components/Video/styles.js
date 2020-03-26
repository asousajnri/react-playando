import styled from "styled-components";

import { shade } from "polished";

import devices from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  iframe {
    height: 30rem;

    @media ${devices.tabletPortrait} {
      height: 40rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding-right: 1rem;

  h2 {
    font-weight: 400;
  }
`;

export const Number = styled.span`
  width: 6rem;
  height: inherit;
  background: ${props => shade(0.1, props.theme.colors.primary)};
  padding: 1rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Controls = styled.div`
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
`;
