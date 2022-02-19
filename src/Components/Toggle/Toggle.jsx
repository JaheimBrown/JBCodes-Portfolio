import React from "react";
import styled from "styled-components";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 36px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span::before {
      transform: translateX(26px);
      background-color: ${({ theme }) => theme.body};
    }

    &:checked + span {
      background-color: ${({ theme }) => theme.bgSecondary};
    }

    &:checked + span {
      .right {
        visibility: hidden;
      }
      .left {
        visibility: show;
      }
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 8px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.bgSecondary};
    border-radius: 24px;
    cursor: pointer;

    .right,
    .left {
      color: ${({ theme }) => theme.body};
      font-size: 18px;
    }

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
        <span>
          <BiMoon className="left" />
          <BsSun className="right" />
        </span>
      </Container>
    </>
  );
};

export default Toggle;
