import React from "react";
import styled from "styled-components";
import TextAnimation from "../Animations/TextAnimation";
import Lottie from "react-lottie";

// ICONS
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.body};
  min-height: 100vh;
  padding: 4rem 1rem 0 1rem;
  margin-bottom: 2rem;
`;

const HeroInfo = styled.div``;

const Title = styled.h1`
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;
  gap: 16px;

  a {
    text-decoration: none;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  p {
    display: inline-block;
  }
`;

const buttonStyle = {
  display: "block",
  height: "65px",
  width: "65px",
  margin: "0",
  fill: "red",
  stroke: "red",
};

const HeroSection = ({ animationData }) => {
  // LOTTIE ANIMATION
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div className="mt-l">
        <HeroInfo>
          <Title className="display-sm mb-m">
            <TextAnimation /> Cutting Edge Web Applications_
          </Title>
          <p className="mb-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            odio doloremque asperiores similique fuga eligendi dolorum nihil
            iste!
          </p>
        </HeroInfo>
        <ButtonContainer className="mt-s">
          <a className="primary-btn">
            View Projects <AiOutlineRight className="icon" />
            <AiOutlineArrowRight className="icon2" />
          </a>
          <a href="#" className="outline-btn">
            Download Resume
          </a>
        </ButtonContainer>
      </div>
      <Flex className="mt-m">
        <p>Learn more about me👩🏾‍💻.</p>
        <Lottie
          className="scollCta"
          options={defaultOptions}
          style={buttonStyle}
          margin={0}
        />
      </Flex>
    </Container>
  );
};

export default HeroSection;
