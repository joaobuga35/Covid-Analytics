import styled from "styled-components";

export const FavoriteCardStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-1);
  padding: 0 0.5rem;
  background-color: #ececec;
  min-height: 25px;

  h3 {
    color: var(--gray-3);
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }

  button {
    all: unset;
    display: inline-block;
    cursor: pointer;
  }
`;
