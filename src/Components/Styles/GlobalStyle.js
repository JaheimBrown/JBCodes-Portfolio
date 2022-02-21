import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Poppins', sans-serif; 
    background-color: ${({ theme }) => theme.background};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar{
    width: 1em;
  }

  ::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.background};
    margin-block: .5em;
  }

  ::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.primary};
    border-radius: 100vw;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  /* TYPOGRAPHY */
  .display {
    font-size: clamp(43.81px,5vw,3.8rem);
    line-height: 54px;
    font-weight: bold;  
  }

  .h1{
    font-size: 3.583rem;
    font-weight: bold;
  }

  .h2{
    font-size: 2.986rem;
    font-weight: bold;
  }

  .h3{
    font-size: 2.488rem;
    font-weight: bold;
  }

  .h4{
    font-size: 2.074rem;
    font-weight: bold;
  }

  .h5{
    font-size: 1.728rem;
    font-weight: bold;
  }

  .h6{
    font-size: 1.44rem;
    font-weight: bold;
  }

  .body-large{
    font-size: 1.2rem;
  }

  p{
    font-size: 1rem;
    font-weight: normal;
    line-height: 24px;
  }

  .body-small{
    font-size: 0.833rem;
  }

  /* MARGINS */
  .mt-s{
    margin-top: 16px;
  }

  .mt-m{
    margin-top: 32px;
  }

  .mt-l{
    margin-top: 64px;
  }

  .mb-s{
    margin-bottom: 16px;
  }

  .mb-m{
    margin-bottom: 32px;
  }

  /* BUTTONS */
  .btn{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white} !important;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004D;
  }

  .primary-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.btnText};
    border: 1px solid ${({ theme }) => theme.border};
    gap: .5em;
    padding: 16px 20px;
    min-width: 100px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004d;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    .icon,.icon2{margin-left: 4px;}

    .icon2{display: none;}

    &:hover, &:focus{
      background-color: #fff;
      color: #000;
      .icon{display: none;}
      .icon2{display: inline-block;}
    }
  }

  .outline-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.border};
    gap: .5em;
    padding: 16px 20px;
    min-width: 100px;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover, &:focus{
      background-color: ${({ theme }) => theme.btnText};
      color: #000;
      box-shadow: 0px 1px 3px 1px #00000026;
      box-shadow: 0px 1px 2px 0px #0000004d;
    }
  }

  .primary-btn-sml{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.btnText};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 12px 24px;
    min-width: 100px;
    gap: 8px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004d;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    .icon,.icon2{margin-left: 4px;}

    .icon2{display: none;}

    &:hover, &:focus{
      background-color: #fff;
      color: #000;
      .icon{display: none;}
      .icon2{display: inline-block;}
    }
  }

  .outline-btn-sml{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 12px 24px;
    min-width: 100px;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover, &:focus{
      background-color: ${({ theme }) => theme.btnText};
      color: #000;
      box-shadow: 0px 1px 3px 1px #00000026;
      box-shadow: 0px 1px 2px 0px #0000004d;
    }
  }

  .source-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 12px 24px 12px 16px;
    min-width: 100px;
    gap: 8px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004d;
    font-family: 'Poppins', sans-serif;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    .icon,.icon2{margin-left: 4px;}

    .icon2{display: none;}

    &:hover, &:focus{
      background-color: #fff;
      color: #000;
      .icon{display: none;}
      .icon2{display: inline-block;}
    }
  }

  .nav-btn{
    display: none;
  @media screen and  (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.btnText};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 16px 24px;
    min-width: 100px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004d;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    .icon,.icon2{margin-left: 4px;}

    .icon2{display: none;}

    &:hover{
      background-color: #fff;
      color: #000;
      .icon{display: none;}
      .icon2{display: inline-block;}
    }
  }
  }

  /* ACTIVE CLASSES */
  .show-menu{
    transform: translateY(0%);
  }
  .scoll-cta{
    background-color: crimson;
    fill: crimson;
  }
`;
