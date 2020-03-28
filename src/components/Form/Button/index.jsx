import React from "react";

import { Container } from "./styles";

const Button = ({ type, children, primary, grey }) => (
  <Container type={type} primary={primary} grey={grey}>
    {children}
  </Container>
);

export default Button;
