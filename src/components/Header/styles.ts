import styled from "styled-components";
import { iTitleHeader } from "./types";

export const MainTitle = styled.header<iTitleHeader>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.marginTop};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
    width: 68px;
    border-radius: 100%;
    background-color: var(--gray-trans);
  }
  h1 {
    color: ${(props) => props.color};
    font-family: var(--font-family-3);
    font-size: var(--title-header-mobile);

    @media (min-width: 1024px) {
      font-size: var(--title-header);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 24px;
    justify-content: center;
  }
`;
