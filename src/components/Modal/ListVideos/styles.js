import styled from "styled-components";

import devices from "../../../styles/devices";

export const Container = styled.ul`
	border-bottom: 1px solid #efeded;
  overflow-y: scroll;
  max-height: 179px;

  @media ${devices.tabletPortrait} {
    overflow-y: unset;
    max-height: unset;
  }
`;