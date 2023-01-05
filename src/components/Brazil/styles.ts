import styled from "styled-components";

export const BrazilStyle = styled.section`
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px 26px;
  width: 220px;
  > h2 {
    color: var(--gray-3);
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: var(--title-2);
    text-align: center;
    margin-bottom: 20px;
  }
  > picture {
    display: flex;
    justify-content: center;
  }

  table {
    margin-bottom: 100px;
    background-color: var(--white);
  }
`;
