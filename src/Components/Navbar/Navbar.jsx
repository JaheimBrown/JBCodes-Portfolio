import { useState } from "react";
import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";

// COMPONENTS
import MobileMenu from "./Menu";
import Toggle from "../Toggle";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 32px 16px;
  height: 72px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 10;

  .Menu {
    color: ${({ theme }) => theme.body};
  }

  .Logo {
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    span {
      color: ${({ theme }) => theme.primary};
    }
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
        <a href="#" className="Logo h5">
          &lt; <span>/</span>JB&gt;
        </a>
        <Flex>
          <Toggle toggleTheme={toggleTheme} />
          <HiMenuAlt3
            className="Menu"
            size={40}
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          />
        </Flex>
      </Container>
      <MobileMenu show={show} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
