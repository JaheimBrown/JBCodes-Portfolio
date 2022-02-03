import React from "react";
import styled from "styled-components";
import { AiOutlineLink, AiOutlineEye } from "react-icons/ai";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  min-height: 500px;
  border-radius: 4px;
  margin-bottom: 3rem;
  box-shadow: 0px 1px 3px 1px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;

  img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  .content {
    padding: 12px;

    p {
      text-align: justify;
    }

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /* padding-left: 1rem; */

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
`;

const Card = ({ item }) => {
  const { name, img, description, links, technologies } = item;
  return (
    <Container>
      <img src={img} alt={name} />
      <div className="content">
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
          <button href="#" className="primary-btn-sml">
            <AiOutlineLink className="body-large" />
            View Live
          </button>
          <button href="#" className="source-btn">
            <AiOutlineEye className="body-large" />
            Source Code
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
