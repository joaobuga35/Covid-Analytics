import styled from 'styled-components'


export const ModalStyle = styled.section`
    width: 100%;
    height:100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:4;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;

    & > div {
    margin: 0 auto;
    width:90%;
    background-color:white;
    border-radius: 30px;
    background-color: var(--gray-1);
    }
   
    @media (min-width:500px){
        & > div {
            margin: 0 auto;
            width:90%;
            max-width:675px;
        }
    }
`
