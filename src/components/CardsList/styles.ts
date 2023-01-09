import styled from "styled-components";

export const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 26px;
  padding-bottom:5px;
  row-gap: 20px;
  overflow-y: auto;
  max-height:550px;
  margin-bottom: 2rem;
  

  @media (max-width: 720px) {
    &{
      flex-wrap: nowrap;
      overflow-x: auto;
      max-width: 100%;
      justify-content: flex-start;
    }
  }
  
  h2 {
    font-family: var(--font-family-1);
    font-size: var(--name-states);
    font-weight: 700;
    text-align: center;
    font-size: 1rem;
    
  }

  td {
    padding: 12px;
  }

  li {
    display: flex;
    flex-direction: column;
    max-width: 182px;

    background-color: var(--white);
    padding: 14px 9px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: var(--radius-2);
    margin: 5px;
    flex: 1 1 150px;
    
  }
  @media (min-width: 1020px) {
    li{
         max-width: 45%;
    }
  }

  table {
    background-color: var(--white);
  }
  
  /* .MuiTableCell-body {
    border: none;
    padding: 5px 0;
    font-family: var(--font-family-1);
    font-size: var(--name-states);
    font-weight: 400;
    color: var(--gray-2);
  } */

  button {
    width: 100%;
    margin-top: 11px;
    font-family: var(--font-family-1);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;
