import styled from "styled-components";

export const SectionStyled = styled.section`
  background-color: var(--gray-1);
  border-radius: var(--radius-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding:0 8px 8px 8px;
  align-items: center;
  > div > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  table {
    margin-bottom: 100px;
    background-color: var(--white);
    max-width: 222px;
  }

  @media (min-width: 1029px) {
    width: 225px;
    padding:0 20px 16px 20px;
  }
`;

export const ButtonContainerStyled = styled.div`
  text-align: center;
  flex-direction: column;
  gap: 30px;
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 70px;

  > button {
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 200px;
  }

  > legend {
    max-width: 80%;
    line-height: 25px;
    color: #858585;
    font-family: var(--font-family-1);
    transform: translateY(-30px);
  }

  @media (min-width: 1029px) {
    margin-bottom: 0;
  }
`;