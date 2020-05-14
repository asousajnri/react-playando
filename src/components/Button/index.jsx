import React from "react";

import { Container } from "./styles";

const Button = ({ type, text, primary, grey }) => (
  <Container type={type} primary={primary} grey={grey}>
    {text}
  </Container>
);

export default Button;
