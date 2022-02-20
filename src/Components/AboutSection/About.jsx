import React from "react";
import styled from "styled-components";

// ASSETS
import aboutImg from "../../Assets/Images/image2.png";
import Icons from "../../Assets/Icons/Icons.svg";

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 44px 1rem 4rem;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};

  h3 {
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
      width: 100%;
    }
  }

  .about-image {
    width: 15em;
    margin: 0 auto;
    object-fit: cover;
  }

  p {
    position: relative;
    color: ${({ theme }) => theme.body};
    line-height: 1.9;
    padding: 1em 0 1em 1.25rem;
    border-left: 2px solid ${({ theme }) => theme.border};

    .top {
      position: absolute;
      top: -1.5em;
      left: 0;
      color: ${({ theme }) => theme.primary};
      span {
        color: ${({ theme }) => theme.body};
      }
    }

    .bottom {
      position: absolute;
      bottom: -1.5em;
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
      height: 38px;
    }
  }

  .technologies {
    position: relative;
    padding: 8px 0 12px 1.25rem;
    border-left: 2px solid ${({ theme }) => theme.border};
    .top {
      position: absolute;
      top: -1.5em;
      left: 0;
      color: ${({ theme }) => theme.primary};
      span {
        color: ${({ theme }) => theme.body};
      }
    }

    .bottom {
      position: absolute;
      bottom: -1.5em;
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

      li {
        color: ${({ theme }) => theme.body};
      }
    }
  }

  @media screen and (min-width: 700px) {
    padding-inline: 3em;
    .about-image {
      width: 18em;
    }
  }

  @media screen and (min-width: 820px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 2em;
      align-items: center;
    }

    .about-image {
      width: 19em;
      grid-row: 1;
      grid-column: 1/3;
    }

    .bio {
      width: 100%;
      grid-row: 1;
      grid-column: 3/9;
    }

    .technologies {
      grid-row: 2;
      grid-column: span 8;
      padding-inline: 2em;
    }

    .bio {
      p {
        padding-inline: 2em;
      }
    }
  }
`;

const About = () => {
  return (
    <Container id="about">
      <h3 className="h2 mb-s">About Me</h3>
      <div className="grid">
        <img
          data-aos="fade-right"
          src={aboutImg}
          className="about-image"
          alt="Image of Jaheim Brown"
        />
        <div className="bio" data-aos="fade-up">
          <p className="mt-l">
            <span className="top body-large">
              <span>&#60;</span>Hello<span>&#62;</span>
            </span>
            Hi! I'm Jaheim Brown a highly enthusiastic Front End Developer based
            in Jamaica. I design and develop websites and web applications with
            a focus on responsive design. In my spare time, I tend to dive into
            other areas of interest such as mobile, game development and diving
            deeper into backend development to one day eventually become a full
            stack developer.
            <span className="bottom body-large">
              <span>&#60;/</span>Hello<span>&#62;</span>
            </span>
          </p>
          <div className="links mt-l">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1B1wXmKfJWndJjuLrx6lIjEb26AjriA02/view"
              className="outline-btn"
            >
              Download Resume
            </a>
            <img src={Icons} />
          </div>
        </div>
        <div className="technologies mt-l" data-aos="fade-up">
          <span className="top body-large">
            <span>&#60;</span>Technologies<span>&#62;</span>
          </span>
          <span>
            <p>Languages</p>
            <ul>
              <li className="body-small">HTML</li>
              <li className="body-small">CSS</li>
              <li className="body-small">Javascript ES6</li>
            </ul>
          </span>

          <span>
            <p>Libraries</p>
            <ul>
              <li className="body-small">React</li>
              <li className="body-small">React-Redux</li>
              <li className="body-small">Styled-Components</li>
            </ul>
          </span>

          <span>
            <p>Tools</p>
            <ul>
              <li className="body-small">GIT</li>
              <li className="body-small">NPM</li>
              <li className="body-small">VSCODE</li>
              <li className="body-small">Figma</li>
              <li className="body-small">Notion</li>
            </ul>
          </span>

          <span className="bottom body-large">
            <span>&#60;/</span>Technologies<span>&#62;</span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default About;
