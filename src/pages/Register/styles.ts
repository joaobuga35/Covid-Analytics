import styled from "styled-components";

import background from "../../assets/background.jpg";

export const RegisterStyled = styled.div`
  width: 100%;
  height: 160vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
  background-size: 150% 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--white);
    font-size: var(--title-1);
    text-align: center;
    margin-bottom: 16px;
    font-weight: 900;
    font-family:var(--font-family-1);
  }

  form {
    padding: 30px 20px;
    background: rgba(330, 330, 330, 0.25);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-3);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
    text-align: center;
    max-width: 600px;
    
    button {
      font-size: var(--font-button);
      font-family:var(--font-family-1);
    }
    span {
      color: var(--black);
      font-size: var(--name-states);
      font-weight: 400;
      font-family:var(--font-family-1);
    }
    input {
      background-color: white;
      
    }

    a {
      text-align: center;
      cursor: pointer;
      font-family:var(--font-family-1);
      font-size: var(--font-button);
      color: var(--white);
    }

    div {
      background-color: white;
     
    }

    select {
      background-color: white;
      padding-left: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    form {
      width: 70%;
    }
  }
`;
