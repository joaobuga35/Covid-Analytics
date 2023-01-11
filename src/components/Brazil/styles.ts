import styled from "styled-components";

export const SectionStyle = styled.section`
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 8px;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
  }

  > h2 {
    color: var(--gray-3);
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: var(--title-2);
    text-align: center;
    margin-bottom: var(--margin-bottom-h2);
    margin-top: var(--margin-top-H2);
  }

  > picture {
    display: flex;
    justify-content: center;
    padding-bottom: 75px;
  }

  table {
    margin-bottom: 100px;
    background-color: var(--white);
    max-width: 222px;
  }

  @media (min-width: 1029px) {
    width: 225px;
  }
`;
