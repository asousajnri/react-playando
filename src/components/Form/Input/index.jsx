import React from "react";

import { Container } from "./styles";

const Input = ({ value, onChange, placeholder }) => (
  <Container
    value={value}
    onChange={e => onChange(e)}
    placeholder={placeholder}
  />
);

export default Input;
