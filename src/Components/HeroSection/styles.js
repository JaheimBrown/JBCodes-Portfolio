import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const ScrollBtn = styled(LinkS)`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-top: 2em;

  .info {
    flex: 1;

    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 70px;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.heroText};
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.body};
      margin-bottom: 1rem;
    }

    .btn-container {
      display: flex;
      justify-content: cetner;
      align-items: cetner;
      gap: 1em;
    }
  }

  .image-container {
    flex: 1;
    position: relative;
    left: 2rem;
  }

  @media (max-width: 1024px) {
    .info {
      flex: 1;
      h1 {
        font-size: 48px;
        line-height: 1.2em;
      }
    }
  }

  @media (max-width: 860px) {
    flex-direction: column;
    .info {
      text-align: center;
      padding: 4rem 2rem 0;

      .btn-container {
        width: 100%;
        justify-content: center;
      }
    }

    .image-container {
      position: static;
      width: 70%;
    }
  }

  @media (max-width: 560px) {
    padding: 1rem;
    .info {
      text-align: left;
      padding-inline: 1rem;

      h1 {
        font-size: 38px;
        line-height: 1.2em;
      }

      .btn-container {
        justify-content: flex-start;
        gap: 0.5rem;

        a {
          padding: 12px 16px;
          font-size: 14px;
        }
      }
    }

    .image-container {
      position: static;
      width: 100%;
      margin-top: 2em;
    }
  }
`;
