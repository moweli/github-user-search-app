import { useState } from "react";
import { ThemeProvider } from "styled-components";
import moonIcon from "./assets/icon-moon.svg";
import sunIcon from "./assets/icon-sun.svg";
import {
  Container,
  GlobalStyles,
  Header,
  darkTheme,
  lightTheme,
} from "./components/styles/index";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const styles = {
    text: {
      color: theme === "light" ? "#697C9A" : "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header>
          <p>devfinder</p>
          <div className="themeChange" onClick={() => toggleTheme()}>
            <p className="theme-text" style={styles.text}>
              {theme === "dark" ? "LIGHT" : "DARK"}
            </p>
            <img
              src={theme === "light" ? moonIcon : sunIcon}
              alt="theme icon"
            />
          </div>
        </Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
