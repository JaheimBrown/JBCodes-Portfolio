import React from "react";
import styled from "styled-components";
import { Data } from "./Data";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";

const Container = styled.section`
  padding: 3rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.body};
    position: relative;

    &::before {
      content: "Let's Talk";
      color: ${({ theme }) => theme.primary};
      font-size: 1rem;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .contact-info {
    position: relative;
    background: ${({ theme }) => theme.bgSecondary};
    background-image: url("https://images.unsplash.com/photo-1621849400072-f554417f7051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
    padding: 2rem 1rem;
    text-align: center;
    margin-top: 2rem;
    color: ${({ theme }) => theme.textOnImg};

    & > * {
      position: relative;
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }
  }

  form {
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.background};

    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #979797;
        }
      }

      label {
        font-size: 1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.body};
      }
      input,
      textarea {
        height: 40px;
        background-color: ${({ theme }) => theme.input};
        color: ${({ theme }) => theme.body};
        border-radius: 8px;
        border: 0;
        padding: 16px;
        margin-top: 0.5rem;

        &:focus {
          border: 3px solid ${({ theme }) => theme.primary};
          outline: none;
        }
      }
      textarea {
        height: 100px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    max-width: 900px;
    margin: 0 auto 3em auto;
    padding-inline: 2em;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto 3em auto;

    .grid {
      display: grid;
      grid-template-columns: 420px 1fr;
      gap: 1em;
      border-radius: 12px;
      margin-top: 2em;
      border: 1px solid ${({ theme }) => theme.border};
    }

    .contact-info {
      grid-column: 1/2;
      text-align: left;
      margin-top: 0;
      padding: 2em;
      background-repeat: no-repeat;
      background-size: cover;

      p {
        margin-block: 1em;
      }

      .links {
        justify-content: flex-start;
        padding-left: unset;
        color: ${({ theme }) => theme.body};
      }
    }
    form {
      grid-column: 2/3;
      width: 100%;
      padding: 2em 1em;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  a {
    font-size: 22px;
    color: ${({ theme }) => theme.textOnImg};
    padding: 8px 16px;
    transition: all 0.2s ease-in-out;

    &:nth-child(1) {
      &:hover,
      &:focus {
        color: #da0d95;
      }
    }

    &:nth-child(2) {
      border-left: 3px solid ${({ theme }) => theme.borderOnImg};
      border-right: 3px solid ${({ theme }) => theme.borderOnImg};
      &:hover,
      &:focus {
        color: #be2a2a;
      }
    }
    &:nth-child(3) {
      border-right: 3px solid ${({ theme }) => theme.borderOnImg};
      &:hover,
      &:focus {
        color: #bcdb0d;
      }
    }
    &:nth-child(4) {
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.primary};
      }
    }

    &:hover,
    &:focus {
      transform: scale(1.16);
    }
  }
`;

const Contact = ({ ...Data }) => {
  return (
    <Container>
      <h2 className="h2">Get In Touch</h2>
      <div className="grid">
        <div className="contact-info">
          <h3 className="h4 ">Contact Information</h3>
          <p className="mt-s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptatum maxime in perspiciatis quae ab quod.
          </p>
          <Links className="links">
            <a href="#">
              <HiMail />
            </a>
            <a href="#">
              <AiFillGithub />
            </a>
            <a href="#">
              <FaCodepen />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </Links>
        </div>
        <form action="#">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <div className="flex">
              <label htmlFor="subject">Subject</label>
              <span className="body-small">(Optional)</span>
            </div>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" />
          </div>
          <div className="btn-container">
            <button href="#" className="primary-btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
