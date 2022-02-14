import { useState } from "react";
import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

// COMPONENTS
import MobileMenu from "./Menu";
import Toggle from "../Toggle";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 72px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 10;

  ul {
    display: none;
  }

  /* DESKTOP VIEW */
  @media screen and (min-width: 1024px) {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      gap: 1.5rem;

      li {
        font-size: 1rem;
      }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.body};

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    .nav-items {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }
  }

  .Menu {
    color: ${({ theme }) => theme.body};
  }

  .Logo {
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    span {
      color: ${({ theme }) => theme.primary};
    }

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-inline: 2em;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;

  img {
    width: 44px;
    height: 44px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .Menu {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  a {
    font-size: 22px;
    color: ${({ theme }) => theme.body};
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;

    &:nth-child(1) {
      &:hover,
      &:focus {
        color: #da0d95;
      }
    }

    &:nth-child(2) {
      border-left: 3px solid ${({ theme }) => theme.border};
      border-right: 3px solid ${({ theme }) => theme.border};
      &:hover,
      &:focus {
        color: #be2a2a;
      }
    }
    &:nth-child(3) {
      border-right: 3px solid ${({ theme }) => theme.border};
      &:hover,
      &:focus {
        color: #bcdb0d;
      }
    }
    &:nth-child(4) {
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const Navbar = ({ toggleTheme }) => {
  const [show, setShow] = useState(false);

  // FUNCTIONS
  const toggleMenu = () => {
    show === false ? setShow(true) : setShow(false);
  };

  return (
    <>
      <Container>
        <div className="nav-items">
          <a href="#" className="Logo h5">
            &lt; <span>/</span>JB&gt;
          </a>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Software Creations">Projects</a>
            </li>
          </ul>
        </div>
        <Flex>
          <Toggle toggleTheme={toggleTheme} />
          <SocialContainer>
            <a href="#">
              <HiMail />
            </a>
            <a href="#">
              <AiFillGithub />
            </a>
            <a href="#">
              <FaCodepen />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </SocialContainer>
          <HiMenuAlt3
            className="Menu"
            size={40}
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          />
          <button href="#" className="nav-btn   ">
            Contact
          </button>
        </Flex>
      </Container>
      <MobileMenu show={show} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
