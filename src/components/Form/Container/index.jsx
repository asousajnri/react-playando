import React from "react";

import { Form } from "./styles";

const Container = ({ children, onSubmit }) => (
  <Form onSubmit={e => onSubmit(e)}>{children}</Form>
);

export default Container;
