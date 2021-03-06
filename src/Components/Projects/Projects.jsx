import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

// STYLES
const Container = styled.section`
  padding: 44px 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

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

  @media screen and (min-width: 500px) {
    padding-inline: 2em;
  }
`;

// PROJECT DATA

const Projects = ({ projects }) => {
  return (
    <Container id="portfolio">
      <h2 className="h2 mb-s">My Work</h2>
      {projects.map(item => {
        return <Card key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Projects;
