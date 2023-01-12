import styled, { createGlobalStyle } from "styled-components";

export const RegisterStyled = styled.div`
  width: 100%;
  height: 160vh;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
  background-size: 150% 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: var(--white);
    font-size: 25px;
    text-align: center;
    margin-bottom: 16px;
    font-weight: 700;
    font-family: var(--font-family-1);
  }

  form {
    padding: 30px 20px;
    background: rgba(330, 330, 330, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 70%;
    text-align: center;
    max-width: 580px;

    button {
      font-size: var(--font-button);
      font-family: var(--font-family-1);
    }

    span {
      color: var(--black);
      font-size: var(--name-states);
      font-weight: 400;
      font-family: var(--font-family-1);
    }

    > div {
      height: 40px;
      border-radius: 5px;
      p{
        font-weight:500;
        color: var(--white) !important;
      }
    }

    div {
      border-radius: 5px;
      > div:nth-child(2) {
        border-radius: 5px;
      }
    }

    input {
      background-color: white;
      font-family: "inter";
      border-radius: 5px;
    }

    a {
      cursor: pointer;
      font-family: var(--font-family-1);
      font-size: var(--font-button);
      color: var(--white);
      width: max-content;
      margin: 0 auto;
    }

     div:nth-child(5) {
      background-color: white;
    } 

    select {
      background-color: white;
      padding-left: 1rem;
      padding-bottom: 1rem;
    }

    > div:nth-child(5) {
      > label {
        margin-left: 13px;
        margin-top: 6px;
        z-index: 10;

      }
    }
  }



  @media (min-width: 768px) {
    form {
      width: 40%;
    }
  }
`;

export const BodyStyled = createGlobalStyle`
  body {
    background-position: 25%;
    transition: 0.5s;
  }
`;