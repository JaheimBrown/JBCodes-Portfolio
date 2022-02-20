import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineLink, AiOutlineEye } from "react-icons/ai";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  border-radius: 4px;
  margin-bottom: 3rem;
  box-shadow: 0px 1px 3px 1px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;

  img {
    display: block;
    width: 100%;
    height: 280px;
    border-radius: 4px 4px 0 0;
    object-fit: cover;
  }

  .content {
    padding: 1rem;

    p {
      text-align: left;
      line-height: 1.7em;
    }

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      li {
        margin: 0 1rem;
      }

      &:nth-child(1) {
        margin-left: 0;
      }
    }

    .btn-container {
      display: flex;
      justify-content: flex-starts;
      align-items: center;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 800px) {
    position: relative;
    display: grid;
    grid-template-areas: "desc img";
    align-items: center;
    border: none;
    box-shadow: unset;

    img {
      position: relative;
      grid-area: img;
      width: 800px;
      height: 500px;
      left: 2em;
      object-fit: cover;
    }

    .content {
      grid-area: desc;
      min-width: 480px;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 0;
    img {
      left: 5em;
      width: 760px;
      height: 500px;
      object-fit: contain;
    }

    .content {
      min-width: 500px;
    }
  }
`;

const Card = ({ item }) => {
  const { name, img, description, links, technologies } = item;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    window.innerWidth > 800 ? setIsLargeScreen(true) : setIsLargeScreen(false);
  };

  const getScreenSize = size => {
    size > 800 ? setIsLargeScreen(true) : setIsLargeScreen(false);
  };

  useEffect(() => {
    let size = window.innerWidth;
    getScreenSize(size);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container data-aos={!isLargeScreen ? "fade-up" : ""}>
      <img src={img} alt={name} data-aos={isLargeScreen ? "fade-left" : ""} />
      <div className="content" data-aos={isLargeScreen ? "fade-up" : ""}>
        <h4 className="h4 mt-s mb-s">{name}</h4>
        <p>{description}</p>
        <ul className="mt-s mb-s">
          {technologies.map((tech, index) => (
            <li key={index} className="body-small">
              {tech}
            </li>
          ))}
        </ul>
        <div className="btn-container">
          <a target="_blank" href={links.live} className="primary-btn">
            <AiOutlineLink className="body-large" />
            View Live
          </a>
          <a target="_blank" href={links.code} className="outline-btn">
            <AiOutlineEye className="body-large" />
            Source Code
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Card;
