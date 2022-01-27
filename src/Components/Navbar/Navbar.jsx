import { useState } from "react";
import styled from "styled-components";
import Logo from "../../Assets/Images/Logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";

// COMPONENTS
import MobileMenu from "./Menu";

const Container = styled.header`
  padding: 32px 16px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
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
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <Flex>
          <HiMenuAlt3
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
