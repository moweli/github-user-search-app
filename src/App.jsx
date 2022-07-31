import { useState } from "react";
import { ThemeProvider } from "styled-components";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import {
  Container,
  GlobalStyles,
  darkTheme,
  lightTheme,
} from "./components/styles/index";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Nav theme={theme} setTheme={setTheme} />
        <SearchBar />
        <MainContent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
