import React from "react";
import styled from "styled-components";

// ASSETS
import aboutImg from "../../Assets/Images/image2.png";
import Icons from "../../Assets/Icons/Icons.svg";

const Container = styled.section`
  min-height: 100vh;
  padding: 44px 1rem 44px;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.body};
    position: relative;

    &::before {
      content: "Personal Information";
      color: ${({ theme }) => theme.primary};
      font-size: 1rem;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .flex {
    img {
      display: block;
      width: 100%;
      height: 250px;
      object-fit: contain;
    }

    p {
      position: relative;
      color: ${({ theme }) => theme.body};
      padding: 8px 0 8px 1.25rem;
      border-left: 2px solid ${({ theme }) => theme.border};

      .top {
        position: absolute;
        top: -24px;
        left: 0;
        color: ${({ theme }) => theme.primary};
        span {
          color: ${({ theme }) => theme.body};
        }
      }

      .bottom {
        position: absolute;
        bottom: -24px;
        left: 0;
        color: ${({ theme }) => theme.primary};
        span {
          color: ${({ theme }) => theme.body};
        }
      }
    }

    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        text-decoration: none;
      }

      img {
        width: 164px;
        height: 34px;
      }
    }

    .technologies {
      position: relative;
      padding: 8px 0 12px 1.25rem;
      border-left: 1px solid ${({ theme }) => theme.border};
      .top {
        position: absolute;
        top: -24px;
        left: 0;
        color: ${({ theme }) => theme.primary};
        span {
          color: ${({ theme }) => theme.body};
        }
      }

      .bottom {
        position: absolute;
        bottom: -24px;
        left: 0;
        color: ${({ theme }) => theme.primary};
        span {
          color: ${({ theme }) => theme.body};
        }
      }

      p {
        margin-top: 1rem;
        padding: 0;
        border: none;
      }

      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 16px 0 16px 16px;
        gap: 2rem;
        border-bottom: 1px dotted ${({ theme }) => theme.border};
      }
    }
  }
`;

const About = () => {
  return (
    <Container>
      <h2 className="h2 mb-s">About Me</h2>
      <div className="flex">
        <img src={aboutImg} alt="Jaheim Brown" />
        <div className="bio">
          <p className="mt-l">
            <span className="top body-large">
              <span>&#60;</span>Hello<span>&#62;</span>
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            modi provident, repellat officia doloribus placeat quis cumque
            laboriosam beatae atque at maiores quia illo.
            <span className="bottom body-large">
              <span>&#60;/</span>Hello<span>&#62;</span>
            </span>
          </p>
          <div className="links mt-l">
            <a href="#" className="outline-btn">
              Download Resume
            </a>
            <img src={Icons} />
          </div>
        </div>
        <div className="technologies mt-l">
          <span className="top body-large">
            <span>&#60;</span>Technologies<span>&#62;</span>
          </span>
          <p>
            Languages
            <ul>
              <li className="body-small">HTML</li>
              <li className="body-small">CSS</li>
              <li className="body-small">Javascript ES6</li>
            </ul>
          </p>

          <p>
            Libraries
            <ul>
              <li className="body-small">React</li>
              <li className="body-small">React-Redux</li>
              <li className="body-small">Styled-Components</li>
            </ul>
          </p>

          <p>
            Tools
            <ul>
              <li className="body-small">GIT</li>
              <li className="body-small">NPM</li>
              <li className="body-small">VSCODE</li>
              <li className="body-small">Figma</li>
              <li className="body-small">Notion</li>
            </ul>
          </p>

          <span className="bottom body-large">
            <span>&#60;/</span>Technologies<span>&#62;</span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default About;
