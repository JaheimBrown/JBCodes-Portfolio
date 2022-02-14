import React from "react";
import styled from "styled-components";
import TextAnimation from "../Animations/TextAnimation";
import Lottie from "react-lottie";
import heroImage from "../../Assets/Images/HeroImage.png";

// ICONS
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Wrapper>
        <img src={heroImage} className="hero-image" />
        <div className="info">
          <h2 className="mb-s">
            <TextAnimation /> Cutting Edge Web Applications.
          </h2>
          <p className="leading  mb-s">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            reprehenderit eaque veniam eius hic sint nisi sit sunt.
          </p>
          <div className="btn-container">
            <a href="#" className="primary-btn">
              View Projects <AiOutlineRight className="icon" />{" "}
              <AiOutlineArrowRight className="icon2" />
            </a>
            <a href="#" className="outline-btn">
              Download Resume
            </a>
          </div>
        </div>
        <div className="scroll">
          <Lottie options={defaultOptions}></Lottie>
        </div>
      </Wrapper>
    </>
  );
};

// STYLES
const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em 1em 0 1em;

  .hero-image {
    display: none;
  }

  .info {
    margin-top: 5em;
    h2 {
      font-size: 2.986rem;
      color: ${({ theme }) => theme.title};
      line-height: 1.1em;
    }

    .leading {
      color: ${({ theme }) => theme.body};
    }

    .btn-container {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  }

  .scroll {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (min-width: 700px) {
    padding-inline: 3em;
    padding-top: 6em;

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

  @media screen and (min-width: 820px) {
    .info {
      h2,
      p {
        text-align: left;
      }
    }

    .btn-container {
      justify-content: flex-start;
    }

    .info {
      width: 50%;
    }

    .hero-image {
      display: unset;
      position: absolute;
      top: 6em;
      right: 0;
      width: 40%;
      max-width: 30em;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1024px) {
    .info {
      margin-top: 3em;

      h2 {
        font-size: 3.583rem;
      }
    }

    .hero-image {
      top: 3em;
    }

    .scroll {
      left: 1.5em;
    }
  }
`;
export default HeroSection;
