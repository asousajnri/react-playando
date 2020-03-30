import React from "react";

import { Container } from "./styles";

const Input = ({
  zeroMargin,
  value,
  onChange,
  placeholder,
  required,
  textWarning
}) => (
  <Container zeroMargin={zeroMargin} className={required && "is-required"}>
    <input
      value={value}
      onChange={e => onChange(e)}
      placeholder={placeholder}
    />

    <span>{textWarning || "Campo obrigatório!"}</span>
  </Container>
);

export default Input;
