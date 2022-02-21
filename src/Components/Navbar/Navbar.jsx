import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
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
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.nav.bg};
  backdrop-filter: blur(20px);
  z-index: 10;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.75rem;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

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
      gap: 3em;

      & > * {
        text-transform: uppercase;
      }
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
  grid-gap: 1em;

  a {
    text-decoration: none;
  }

  .Menu {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const LinkScroll = styled(LinkS)`
  cursor: pointer;
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
      border-left: 2px solid ${({ theme }) => theme.border};
      border-right: 2px solid ${({ theme }) => theme.border};
      &:hover,
      &:focus {
        color: #be2a2a;
      }
    }
    &:nth-child(3) {
      border-right: 2px solid ${({ theme }) => theme.border};
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
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <Container>
        <div className="content">
          <div className="nav-items">
            <LinkScroll
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-70}
              className="Logo h5"
            >
              &lt; <span>/</span>JB&gt;
            </LinkScroll>
            <ul>
              <li>
                <LinkScroll
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-70}
                >
                  Home
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-70}
                >
                  About
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-70}
                >
                  Projects
                </LinkScroll>
              </li>
            </ul>
          </div>
          <Flex>
            <Toggle toggleTheme={toggleTheme} />
            <SocialContainer>
              <a
                href="mailto:jaheimcbrown@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <HiMail />
              </a>
              <a
                href="https://github.com/KxngJ"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://codepen.io/kxngj"
                rel="noreferrer"
                target="_blank"
              >
                <FaCodepen />
              </a>
              <a
                href="https://www.linkedin.com/in/jaheim-brown-a92076209"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </SocialContainer>
            <HiMenuAlt3
              className="Menu"
              size={40}
              style={{ cursor: "pointer" }}
              onClick={toggleMenu}
            />
            <LinkScroll
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-70}
              href="#"
              className="nav-btn"
            >
              Contact
            </LinkScroll>
          </Flex>
        </div>
      </Container>
      <MobileMenu show={show} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
