import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

// DATA
import projects from "./Data";

// STYLES
const Container = styled.section`
  padding: 44px 1rem 2rem;
  background-color: ${({ theme }) => theme.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  min-height: 100vh;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.body};
    position: relative;

    &::before {
      content: "Software Creations";
      color: ${({ theme }) => theme.primary};
      font-size: 1rem;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Header = styled.h2``;

// PROJECT DATA

const Projects = () => {
  return (
    <Container>
      <h2 className="h2 mb-s">My Work</h2>
      {projects.map((item, index) => {
        return <Card key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Projects;
