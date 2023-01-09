import styled from "styled-components";

export const SectionStyle = styled.section`
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 26px; 


  

  @media (max-width: 720px) {
    width: 100%;
    padding: 8px;
  }

  > h2 {
    color: var(--gray-3);
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: var(--title-2);
    text-align: center;
    margin-bottom: 20px;
    margin-top: 3ch;
  }

  > picture {
    display: flex;
    justify-content: center;
  }

  table {
    margin-bottom: 100px;
    background-color: var(--white);
  }

  @media (min-width: 1024px) {
    width: 225px;
  }
`;
