import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;
