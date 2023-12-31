import { styled } from "styled-components";

export const Colom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        width: 16%;
    }
`

export const RowEl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: ${props => props.cent && 'center'};
`

export const TypoClient = styled.p`
    color: #0251EB;
font-family: Montserrat;
font-size: 2rem;
font-style: normal;
font-weight: 500;
line-height: normal;
    @media screen and (max-width: 1200px){
        font-size: 1rem;
        text-align: center;
    }
`