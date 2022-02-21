import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link as LinkS } from "react-scroll";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.body};
  padding: 32px 32px 32px 16px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  .menu-close {
    position: absolute;
    top: 16px;
    right: 32px;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  margin-top: 64px;
`;

const LinkScroll = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.body};
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Button = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.linkHover};
  cursor: pointer;
  border-radius: 8px;
  padding: 16px 24px;
  width: 100%;
  box-shadow: 0px 1px 3px 1px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.body};
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

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

    &:hover,
    &:focus {
      transform: scale(1.16);
    }
  }
`;

const LinkItems = styled.div`
  position: fixed;
  height: auto;
  padding: 32px 32px 32px 16px;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Menu = ({ menu, closeMenu }) => {
  return (
    <Container className={menu && "open"}>
      <IoMdClose className="menu-close" onClick={closeMenu} size={40} />
      <Grid>
        <LinkScroll
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          onClick={closeMenu}
          offset={-70}
          className="body-large mt-s"
        >
          Home
        </LinkScroll>
        <LinkScroll
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          onClick={closeMenu}
          offset={-70}
          className="body-large mt-s"
        >
          About
        </LinkScroll>
        <LinkScroll
          to="portfolio"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          onClick={closeMenu}
          offset={-70}
          className="body-large mt-s"
        >
          Projects
        </LinkScroll>
      </Grid>
      <LinkItems>
        <Button
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          onClick={closeMenu}
          offset={-70}
          className="body-large "
        >
          Get In Touch
        </Button>
        <Socials className="mt-m">
          <a
            href="mailto:jaheimcbrown@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <HiMail />
          </a>
          <a href="https://github.com/KxngJ" rel="noreferrer" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://codepen.io/kxngj" rel="noreferrer" target="_blank">
            <FaCodepen />
          </a>
          <a
            href="https://www.linkedin.com/in/jaheim-brown-a92076209"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </Socials>
      </LinkItems>
    </Container>
  );
};

export default Menu;
