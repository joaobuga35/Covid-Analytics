import styled, { createGlobalStyle } from "styled-components";

export const DashboardStyled = styled.div`
  background-color: var(--white);
  padding-bottom: 50px;
  main {
    margin: 0 auto;
    display: flex;
    max-width: 1200px;
    gap: 1.5rem;
    margin-top: 1rem;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1029px) {
    main {
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
    }
  }
`;

export const BodyStyled = createGlobalStyle`
  body {
    background-color: var(--white);
  }
`;