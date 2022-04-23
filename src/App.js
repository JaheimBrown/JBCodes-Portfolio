// IMPORTS
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/GlobalStyle";
import { lightMode, darkMode } from "./Components/Theme";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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
import Loading from "./Components/Loading/Loading";

function App() {
  // STATES
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "light";
    }
  });
  const [menu, setMenu] = useState(false);
  const [toggleAni, setToggleAni] = useState(false);
  const [projects, setProjects] = useState(null);
  const Data = toggleAni ? animationData2 : animationData;

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const setLocalTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleAni(true);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      setToggleAni(false);
      localStorage.setItem("theme", "light");
    }
  };

  const getDocuments = () => {
    const docArray = [];
    const projectRef = collection(db, "projects");
    const q = query(projectRef, orderBy("date_added", "desc"));

    getDocs(q)
      .then(res => {
        res.forEach(item => {
          const docObj = { id: item.id, ...item.data() };
          docArray.push(docObj);
        });
        setProjects(docArray);
      })
      .catch(err => console.log(err));

    // Testing order
  };

  console.log(projects);

  // Initializing AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
    });

    //Firebase
    setTimeout(() => {
      getDocuments();
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalStyles />
      {projects ? (
        <>
          <Navbar
            openMenu={openMenu}
            closeMenu={closeMenu}
            menu={menu}
            setLocalTheme={setLocalTheme}
          />
          <HeroSection animationData={Data} />
          <About />
          <Projects projects={projects} />
          <Contact />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}

export default App;
