import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: 1rem;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 32px;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 0.5em;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 2em 1em;
      gap: 1em;

      p {
        font-size: 14px;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.body};
  }

  .credit {
    display: flex;
    gap: 8px;

    .name {
      font-weight: bold;
    }
    .link {
      font-weight: bold;
      text-decoration: underline;
      color: ${({ theme }) => theme.body};
    }
  }

  .rights {
    display: flex;
    gap: 4px;

    span {
      font-weight: bold;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="credit">
          <p>Animation made by</p>
          <p className="name">Sxzar</p>
          <p>from</p>
          <a
            href="https://lottiefiles.com/ezcgs4uiue"
            target="_blank"
            className="link"
          >
            www.lottiefiles.com
          </a>
        </div>
        <div className="rights">
          <p>
            Built and designed by <span>Jaheim Brown</span>.
          </p>
          <p>All rights reserved. &copy;</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
