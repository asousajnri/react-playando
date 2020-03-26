import React from "react";

import { Container } from "./styles";

const Button = ({ children, onClick, primary, grey }) => (
  <Container primary={primary} grey={grey} onClick={e => onClick(e)}>
    {children}
  </Container>
);

export default Button;
