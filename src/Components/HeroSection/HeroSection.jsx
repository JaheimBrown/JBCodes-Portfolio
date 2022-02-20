import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import TextAnimation from "../Animations/TextAnimation";
import Lottie from "react-lottie";
import lottie from "lottie-web";
import { Link as LinkS } from "react-scroll";
import HeroAni from "../../Assets/Animations/hero/phone.json";

// ICONS
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = ({ animationData }) => {
  const container = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: HeroAni,
    });

    lottie.setSpeed(0.5);
  }, []);

  return (
    <>
      <Wrapper id="home">
        <div className="container" ref={container}></div>
        <div className="info">
          <h2 className="mb-s">
            <TextAnimation /> Cutting Edge Web Applications.
          </h2>
          <p className="leading  mb-s">
            I'm Jaheim Brown a Front End Developer based in Jamaica. I design
            and develop websites and web applications with a focus on responsive
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
              href="https://drive.google.com/file/d/1B1wXmKfJWndJjuLrx6lIjEb26AjriA02/view"
              className="outline-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="scroll">
          <Lottie
            options={defaultOptions}
            style={{ width: "4rem", marginLeft: "6px" }}
          ></Lottie>
        </div>
      </Wrapper>
    </>
  );
};

// STYLES
const ScrollBtn = styled(LinkS)`
  cursor: pointer;
`;

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  max-height: 660px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em 1em 0 1em;

  .container {
    display: none;
  }

  .info {
    margin-top: 5em;

    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.title};
      line-height: 1.1em;
      margin-bottom: 1em;
    }

    .leading {
      color: ${({ theme }) => theme.body};
      margin-bottom: 2em;
    }

    .btn-container {
      display: flex;
      align-items: center;
      gap: 1em;

      @media (max-width: 380px) {
        a {
          padding: 12px 14px;
        }
      }
    }
  }

  .scroll {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 600px) {
    padding-inline: 3em;
    padding-top: 6em;

    .container {
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 60%;
      width: 35%;
    }

    .info {
      margin-top: 0;
    }

    h2,
    p {
      text-align: center;
    }

    h2 {
      margin-bottom: 0.5em;
    }

    p {
      margin-bottom: 2em;
    }

    .btn-container {
      width: 100%;
      justify-content: center;
    }
  }

  @media screen and (min-width: 860px) {
    .container {
      transform: none;
      -webkit-tranform: none;
      left: auto;
      top: 6em;
      right: -2em;
      width: 50%;
    }

    .info {
      margin-top: 4em;
      width: 65% !important;

      h2 {
        font-size: 3.583rem;
        margin-bottom: 0.5em;
      }

      h2,
      p {
        text-align: left;
        width: 90%;
      }
    }

    .btn-container {
      justify-content: flex-start;
    }

    .info {
      width: 50%;
    }
  }

  @media screen and (min-width: 1120px) {
    .container {
      top: 4.5em;
      right: -5em;
    }
    .info {
      margin-top: 3.5em;
      width: 65% !important;

      h2 {
        font-size: 4.3rem;
        font-weight: bold;
        line-height: 1.1em;
      }

      p {
        width: 85%;
      }
    }

    .scroll {
      left: 1.5em;
      bottom: -0.8em;
    }
  }
`;
export default HeroSection;
