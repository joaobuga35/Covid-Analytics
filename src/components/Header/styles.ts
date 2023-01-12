import styled from "styled-components";
import { iTitleHeader } from "./types";

export const MainTitleStyled = styled.header<iTitleHeader>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => props.marginTop};
  width: 100%;
  margin-bottom: 32px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
    width: 68px;
    border-radius: 100%;
    background-color: var(--gray-trans);
    padding: 5px;
    backdrop-filter: blur(5px);
  }

  h1 {
    color: ${(props) => props.colorTitle};
    font-family: var(--font-family-3);
    font-size: var(--title-header-mobile);
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: var(--title-header);
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
