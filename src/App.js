// IMPORTS
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/GlobalStyle";
import { lightMode, darkMode } from "./Components/Theme";

//COMPONENTS
import Navbar from "./Components/Navbar";
// STATES

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      <>
        <Navbar toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
