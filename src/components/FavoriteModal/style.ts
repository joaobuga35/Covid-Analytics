import styled from 'styled-components'


export const Section = styled.section`
    width: 100%;
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    z-index:4;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;

    .modal{
    margin: 0px 12px 0 12px;
    width:100vw;
    background-color:white;
    border-radius: 30px;
    background-color: var(--gray-1);
    }

    h2{
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        margin: 0;
        color:var(--color-grey-0);
        

    }
    .close{
        height: 20.856369018554688px;
        width: 8.823847770690918px;
        font-family: Nunito;
        font-size: 13px;
        font-weight: 600;
        color:var(--color-grey-1);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
    }
    
    
   
    @media (min-width:500px){
        .modal{
            margin: 0 auto;
            width:100%;
            max-width:675px;
            height:568px;

        }
    }
`
