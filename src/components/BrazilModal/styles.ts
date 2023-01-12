import styled from "styled-components";

export const GraphListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  >div {
    padding-bottom: 35px;
    overflow-x: visible;
  }
  h3 {
    text-align: center;
    font-family: var(--font-family-1);
    font-size: var(--title-2);
  }
`;

export const GraphModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  > div {
    margin: 0 auto;
    width: 90%;
    max-height: 600px;
    background-color: white;
    border-radius: 30px;
    background-color: var(--gray-1);
    overflow-x: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1ch;
      > h2 {
        font-size: var(--title-2);
        color: var(--gray-3);
        font-family: var(--font-family-1);
      }
      > button {
        border: 0;
        background-color: transparent;
        font-size: 1.25rem;
        color: grey;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
  }

  @media (min-width: 500px) {
    > div {
      margin: 0 auto;
      width: 90%;
      max-width: 675px;
    }
  }
`;
