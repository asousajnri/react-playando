import React from "react";

import { Container } from "./styles";

const Button = ({ type, text, primary, grey, onClick }) => (
  <Container type={type} primary={primary} grey={grey} onClick={onClick}>
    {text}
  </Container>
);

export default Button;
