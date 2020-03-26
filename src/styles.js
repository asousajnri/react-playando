import styled from "styled-components";

import devices, { sizes } from "./styles/devices";

export const AppContainer = styled.main`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: ${sizes.tabletLandscape};
  padding-bottom: 10rem;
`;

export const MainVideos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;

  @media ${devices.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;
