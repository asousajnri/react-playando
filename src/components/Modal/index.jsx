import React, { useState } from "react";

import { hasClass, toggleClass } from "../../utils/DOM";

import {
  Container,
  Box,
  ListVidos,
  Actions,
  Thumbnail,
  Message,
  Instruction,
} from "./styles";

const Modal = ({ dispatch, resultSearch }) => {
  return (
    <Container>
      <Box>
        <Actions></Actions>
      </Box>
    </Container>
  );
};

export default Modal;
