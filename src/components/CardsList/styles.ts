import styled from "styled-components";

export const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 5px;
  row-gap: 20px;
  overflow-y: auto;
  flex-wrap: nowrap;
  overflow-x: scroll;
  max-width: 100%;
  max-height: 550px;
  margin: 26px 10px 0 10px;

  h2 {
    font-family: var(--font-family-1);
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: var(--gray-3);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 25px 0 35px 0;
  }

  td {
    padding: 12px;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 182px;
    background-color: var(--white);
    padding: 14px 9px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: var(--radius-2);
    margin: 5px;
    flex: 1 1 150px;
  }

  table {
    background-color: var(--white);
  }

  button {
    width: 100%;
    margin-top: 11px;
    font-family: var(--font-family-1);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }

  @media (min-width: 720px) {
    & {
      flex-wrap: wrap;
      max-height: 640px;
      justify-content: center;
      overflow-x:hidden ;
      margin: 26px 0;
    }

    li {
      flex: 1 300px;
      max-width: 43%;
    }
  }

  @media (min-width: 1029px) {
    li {
      max-width: 43%;
      flex: 1 1 250px;
    }
  }

  @media (min-width: 1162px) {
    li {

      max-width: 45%;
    }
  }
`;
