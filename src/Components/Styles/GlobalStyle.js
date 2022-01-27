import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Poppins', sans-serif;
  }

  /* TYPOGRAPHY */
  .display{
    font-size: 4.3rem;
    font-weight: bold;
  }

  h1{
    font-size: 3.583rem;
    font-weight: bold;
  }

  h2{
    font-size: 2.986rem;
    font-weight: bold;
  }

  h3{
    font-size: 2.488rem;
    font-weight: bold;
  }

  h4{
    font-size: 2.074rem;
    font-weight: bold;
  }

  h5{
    font-size: 1.728rem;
    font-weight: bold;
  }

  h6{
    font-size: 1.44rem;
    font-weight: bold;
  }

  .body-large{
    font-size: 1.2rem;
  }

  p{
    font-size: 1rem;
    font-weight: normal;
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

  /* BUTTONS */
  .btn{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white} !important;
    box-shadow: 0px 1px 3px 1px #00000026;
    box-shadow: 0px 1px 2px 0px #0000004D;
  }

  /* ACTIVE CLASSES */
  .show-menu{
    transform: translateY(0%);
  }
`;
