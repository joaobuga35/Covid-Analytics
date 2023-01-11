import styled from "styled-components";

export const FavoriteCardStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-1);
  padding: 0.5rem 1rem;
  background-color: #ececec;
  min-height: 25px;

  h3 {
    color: var(--gray-3);
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    width: 30px;
    padding: 0;
    font-size: 1.5rem;
    min-width: 0;
  }
`;
