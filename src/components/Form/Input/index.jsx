import React from "react";

import { Container } from "./styles";

const Input = ({ placeholder }) => (
  <Container>
    <input placeholder={placeholder} />
  </Container>
);

export default Input;
