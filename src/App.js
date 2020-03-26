import React from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import themeOrange from "./styles/theme-orange";

import Header from "./components/Header";

import { AppContainer } from "./styles";

function App() {
  return (
    <ThemeProvider theme={themeOrange}>
      <AppContainer>
        <GlobalStyle />

        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
