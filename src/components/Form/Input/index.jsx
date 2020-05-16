import React from "react";

import { Container } from "./styles";

const Input = ({ placeholder, refInput }) => {
  return (
    <Container>
      <input ref={refInput} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
