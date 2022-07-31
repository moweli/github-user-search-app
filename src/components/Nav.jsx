import { NavStyled } from "./styles/Nav.styled";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

function Nav({ theme, setTheme }) {
  const styles = {
    text: {
      color: theme === "light" ? "#697C9A" : "#fff",
    },
  };
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <NavStyled>
      <p>devfinder</p>
      <div className="themeChange" onClick={() => toggleTheme()}>
        <p className="theme-text" style={styles.text}>
          {theme === "dark" ? "LIGHT" : "DARK"}
        </p>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="theme icon" />
      </div>
    </NavStyled>
  );
}

export default Nav;
