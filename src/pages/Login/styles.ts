import styled from "styled-components";

import background from "../../assets/background.jpg";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: left center;
  background-attachment: fixed;
  background-size: 150% 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .titleLoguin {
    color: var(--white);
    font-size: var(--title-1);
    text-align: center;
    margin-bottom: 16px;
    font-weight: 900;
    font-family: "inter";
  }

  form {
    padding: 25px 20px;
    background: rgba(330, 330, 330, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
    text-align: center;

    .button {
      font-size: var(--font-button);
      font-family: "inter";
    }
  }

  .spanQuestion {
    color: var(--black);
    font-size: var(--name-states);
    font-weight: 400;
    font-family: "inter";
  }

  label {
    text-align: start;
    cursor: pointer;
    font-family: "inter";
    font-size: var(--label);
  }

  .InputForm {
    background-color: white;
    font-family: "inter";
  }

  .Link {
    text-align: center;
    cursor: pointer;
    font-family: "inter";
    font-size: var(--font-button);
    color: #0083d1;
  }

  @media (max-width: 768px) {
    form {
      width: 70%;
    }
  }
`;
