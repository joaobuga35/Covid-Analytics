import styled from "styled-components";
import background from "../../assets/background.jpg";

export const HomepageStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: auto 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  > div {
    height: 55vh;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    max-width: 600px;
    margin-top: 1.5rem;
    border: 1px solid var(--color-blue);
    box-shadow: 0 2px 2px var(--gray-trans);
    background-color: rgba(0, 0, 255, 0.2);
    border-radius: var(--radius-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
      text-align: center;
      font-size: var(--title-2);
      color: var(--white);
      text-shadow: 1px 1px 2px var(--gray-5);
      line-height: 125%;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-bottom: 5%;
      > div {
        display: flex;
        gap: 2ch;
        margin-bottom: 1rem;
      }
    }
  }
  a {
    color: var(--white);
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    padding: 0.5rem 1rem;
    border: 2px solid var(--white);
    border-radius: var(--radius-2);
    background-color: var(--color-blue);
    :hover {
      transform: translateY(-2px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      background-color: transparent;
    }
  }
`;
