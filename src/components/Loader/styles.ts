import styled from "styled-components";

export const DivLoader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;

  h1 {
    font-size: var(--title-1);
    color: var(--white);
    font-family: var(--font-family-2);
  }
`;
