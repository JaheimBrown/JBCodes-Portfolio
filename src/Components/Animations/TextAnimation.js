import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% { opacity: 0%; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px); };
  25% { opacity: 100%; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter:blur(0); };
  75% { opacity: 100%; transform: translateY(0) skewY(0) skewX(0) rotateZ(0); filter:blur(0); };
  100% { opacity: 0%; transform: translateX(100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px); };
`;

const Container = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
  }
`;

const TextAnimation = () => {
  const wordArray = "Design".split("");
  const wordArray2 = "Develop".split("");
  const wordArray3 = "Deploy".split("");
  const [word, setWord] = useState(wordArray);
  const [count, setCount] = useState(1);

  const updateArray = () => {
    if (count === 1) {
      setWord(wordArray);
      setCount(count + 1);
    } else if (count === 2) {
      setWord(wordArray2);
      setCount(count + 1);
    } else if (count === 3) {
      setWord(wordArray3);
      setCount(1);
    }
  };

  useEffect(() => {
    updateArray();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateArray();
    }, 6000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <Container>
      {word.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </Container>
  );
};

export default TextAnimation;
