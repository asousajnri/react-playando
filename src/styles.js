import styled from "styled-components";

import devices, { sizes } from "./styles/devices";

export const AppContainer = styled.main`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: ${sizes.tabletLandscape};

  h1 {
  }
`;
