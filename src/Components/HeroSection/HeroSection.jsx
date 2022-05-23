import styled from "styled-components";
import TextAnimation from "../Animations/TextAnimation";
import Lottie from "lottie-react";
import heroImage from "../../Assets/Animations/hero/phone.json";

// ICONS
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";

import { Wrapper, ScrollBtn } from "./styles";

const HeroSection = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper id="home">
      <div className="info">
        <h1 className="mb-s">
          <TextAnimation /> Cutting Edge Web Applications.
        </h1>
        <p className="leading  mb-s">
          I'm Jaheim Brown a Front End Developer based in Jamaica. I design and
          develop websites and web applications with a focus on responsive
          design.
        </p>
        <div className="btn-container">
          <ScrollBtn
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-70}
            className="primary-btn"
          >
            View Projects <AiOutlineRight className="icon" />{" "}
            <AiOutlineArrowRight className="icon2" />
          </ScrollBtn>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1MafW05Ofau4EXNTs6MwLxFEzz05319aN/view?usp=sharing"
            className="outline-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="image-container">
        <Lottie
          animationData={heroImage}
          default={defaultOptions}
          autoPlay={true}
          loop={true}
        />
      </div>
    </Wrapper>
  );
};

export default HeroSection;
