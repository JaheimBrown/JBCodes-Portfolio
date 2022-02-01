// IMPORTS
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/GlobalStyle";
import { lightMode, darkMode } from "./Components/Theme";

// ANIMATIONS
import animationData from "../src/Assets/Animations/scrollAnimation.json";
import animationData2 from "../src/Assets/Animations/scrollAnimation-dark.json";

//COMPONENTS
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/AboutSection";

function App() {
  // STATES
  const [theme, setTheme] = useState("light");
  const [toggleAni, setToggleAni] = useState(false);
  const Data = toggleAni ? animationData2 : animationData;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setToggleAni(true) : setToggleAni(false);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <>
        <Navbar toggleTheme={toggleTheme} />
        <HeroSection animationData={Data} />
        <About />
      </>
    </ThemeProvider>
  );
}

export default App;
