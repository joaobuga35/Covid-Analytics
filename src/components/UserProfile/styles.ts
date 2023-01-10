import styled from "styled-components";

export const SectionStyle = styled.section`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 250px;
  justify-content: space-between;
  
  @media (max-width: 720px) {
    width: 100%;
  }

  h2 {
    font-family: var(--font-family-1);
    font-size: var(--title-2);
    color: var(--gray-3);
    font-weight: 700;
    

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
    text-align: center;
    margin-bottom: var(--margin-bottom-h2);
    margin-top: var(--margin-top-H2)
  }

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-3);
    padding: 32px 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    background-color: var(--gray-1);
    height: 50%;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--radius-3);
    padding: 0 0 32px 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    background-color: var(--gray-1);
    height: 50%;
  }
  
`;

export const UserStyle = styled.div`
  div {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 6px solid white;
    overflow: hidden;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    

    img {
      object-fit: cover;
      width: 100%;
      transition: 0.3s;
    }

    :hover {
      transition: 0.3s;
      border-color: rgba(0, 0, 0, 0.01);

      img {
        transition: 0.3s;
        transform: scale(1.05);
      }
    }
    :not(:hover) {
      img {
        transition: 3s;
      }
    }
  }
`;

export const UserFavoriteStyled = styled.div`
  ul {
    max-height: 80%;
    width: 80%;
    margin-top: 3ch;
    display: flex;
    flex-direction: column;
    gap: 1ch;
    overflow-y: auto;
    padding: 1rem;
    
  }
`;
