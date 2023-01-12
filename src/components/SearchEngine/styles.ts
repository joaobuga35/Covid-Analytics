import styled from "styled-components";

export const SearchStyled = styled.section`
  background-color: var(--gray-1);
  min-height: 568px;
  width: 100%;
  margin: 0 auto;
  border-radius: var(--radius-3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h2 {
    font-family: var(--font-family-1);
    font-size: var(--title-2);
    font-weight: 700;
    text-align: center;
    color: var(--gray-3);
    margin-bottom: var(--margin-bottom-h2);
    margin-top: var(--margin-top-H2);
  }

  div {
    display: flex;
    width: 100%;
    gap: 9px;
    button {
      min-width: 0;
      margin-right: 10px;
    }
  }

  input {
    width: 90%;
    height: 32px;
    border-radius: var(--radius-2);
    border: 1px solid var(--white);
    font-family: var(--font-family-1);
    font-size: var(--label);
    font-weight: 500;
    padding-left: 10px;
    margin-left: 10px;
  }

  button {
    width: 48px;
    border-radius: var(--radius-2);
    background-color: #0083d1;
    border: 1px solid #0083d1;
  }

  svg {
    color: white;
    font-size: 16px;
  }

  @media (min-width: 720px) {
    div > button {
      width: 80px;
      border-radius: var(--radius-2);
      background-color: #0083d1;
      border: 1px solid #0083d1;
    }
  }
  @media (min-width: 1029px) {
    padding:0 20px 8px 20px;
    max-width: 675px;
  }
`;
