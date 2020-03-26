import styled from "styled-components";

import devices from "../../styles/devices";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    padding: 4rem 3rem;
    color: #ff7e0a;
    border-bottom: 1px solid #f1eded;

    @media ${devices} {
      font-size: 6rem;
    }
  }
`;
