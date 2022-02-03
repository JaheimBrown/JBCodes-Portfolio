import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  margin-top: 1rem;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};

  p {
    color: ${({ theme }) => theme.body};
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>Built and designed by Jaheim Brown.</p>
      <p>All rights reserved. &copy;</p>
    </Container>
  );
};

export default Footer;
