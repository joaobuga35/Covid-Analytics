import styled, { createGlobalStyle } from "styled-components";

export const HomePageStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: auto 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    background: rgba(330, 330, 330, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    max-width: 580px;
    width: 90%;

    p {
      text-align: center;
      font-size: 15px;
      color: var(--white);
      font-family: var(--font-family-1);
      text-shadow: 1px 1px 2px var(--gray-5);
      line-height: 125%;
      padding: 20px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-bottom: 5%;

      > div {
        display: flex;
        gap: 15px;
        margin-bottom: 1rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: unset;
  }

  button {
    width: 110px;
    height: 52px;
  }

  @media (min-width: 650px) {
    > div {
      gap: 20px;
      text-align: center;
      max-width: 580px;
      width: 60%;
      padding: 30px 20px;

      p {
        font-size: 25px;
        padding: 30px;
      }
    }
  }
`;

export const BodyStyled = createGlobalStyle`
  body {
    background-position: 50%;
    transition: 0.5s;
  }
`;
