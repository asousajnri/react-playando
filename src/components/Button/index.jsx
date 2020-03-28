import React from "react";

import { Container } from "./styles";

const Button = ({ type, children, primary, grey, onClick }) => (
  <Container
    type={type}
    primary={primary}
    grey={grey}
    onClick={e => onClick(e)}
  >
    {children}
  </Container>
);

export default Button;
