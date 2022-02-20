// IMPORTS
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/GlobalStyle";
import { lightMode, darkMode } from "./Components/Theme";

// ANIMATIONS
import animationData from "../src/Assets/Animations/scrollAnimation.json";
import animationData2 from "../src/Assets/Animations/scrollAnimation-dark.json";
import AOS from "aos";
import "aos/dist/aos.css";

//COMPONENTS
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/AboutSection";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  // STATES
  const [theme, setTheme] = useState("light");
  const [toggleAni, setToggleAni] = useState(false);
  const Data = toggleAni ? animationData2 : animationData;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setToggleAni(true) : setToggleAni(false);
  };

  // Initializing AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <>
        <Navbar toggleTheme={toggleTheme} />
        <HeroSection animationData={Data} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
