import styled from "styled-components";

export const FavoriteStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  > section > div:first-of-type {
    width: 277px;
    height: 265px;
    background: var(--white);
    padding: 23px 3px 3px 3px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  section:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }

  > h2 {
    font-size: var(--title-2);
    color: var(--gray-3);
    font-family: var(--font-family-1);
  }

  > button:nth-child(1) {
    width: 29px;
    height: 29px;
    border-radius: 100%;
    background-color: var(--white);
    border: none;
    position: relative;
    top: 22px;
    left: 90%;
  }
  div button:nth-child(2) {
    transform: translateY(17px);
  }
  div > button:nth-child(2), .iconContainer {
    width: 100%;
    height: 36px;
    background-color: #25d366;
    border-radius: 4px;
    margin-bottom: 8px;
    box-shadow: 0px 1px 4px 0px #00000040;
    transition: 0.2s;

    :hover {
      background-color: #1ec75d;
    }
  }

  button:nth-child(3) {
    width: 100%;
  }

  .MuiTableCell-body {
    border: none;
    padding: 10px 5px;
    font-family: var(--font-family-1);
    font-size: var(--label);
    font-weight: 400;
    color: var(--gray-2);
    margin-bottom: 20px;
  }

  img:nth-child(2) {
    height: 273px;
    width: 277px;
    border-radius: var(--radius-2);
    border: 5px solid #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  .div_text {
    border-radius: var(--radius-2);
    padding: 8px !important;
  }

  @media (min-width: 840px) {
    width: 100%;

    section:first-of-type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
