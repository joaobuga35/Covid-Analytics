import styled from "styled-components";

export const ModalHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto 2rem auto;
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
    transition: 0.5s;
    :hover {
      color: red;
    }
  }
`;
