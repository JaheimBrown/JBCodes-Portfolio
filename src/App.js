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
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "light";
    }
  });

  const [toggleAni, setToggleAni] = useState(false);
  const Data = toggleAni ? animationData2 : animationData;

  const setLocalTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleAni(true);
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      setToggleAni(false);
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    setLocalTheme();
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
