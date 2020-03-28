import React from "react";

import { Container } from "./styles";

const Input = ({ value, onChange, placeholder, required, textWarning }) => (
  <Container className={required && "is-required"}>
    <input
      value={value}
      onChange={e => onChange(e)}
      placeholder={placeholder}
    />

    <span>{textWarning || "Campo obrigatório!"}</span>
  </Container>
);

export default Input;
