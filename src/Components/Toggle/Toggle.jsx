import React from "react";
import styled from "styled-components";

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 36px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span::before {
      transform: translateX(22px);
      background-color: ${({ theme }) => theme.body};
    }

    &:checked + span {
      background-color: ${({ theme }) => theme.bgSecondary};
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.bgSecondary};
    border-radius: 24px;

    cursor: pointer;

    &::before {
      position: absolute;
      content: "";
      width: 26px;
      height: 26px;
      bottom: 5px;
      left: 5px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.background};
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const Toggle = ({ toggleTheme }) => {
  return (
    <>
      <Container>
        <input type="checkbox" onClick={toggleTheme} />
        <span></span>
      </Container>
    </>
  );
};

export default Toggle;
