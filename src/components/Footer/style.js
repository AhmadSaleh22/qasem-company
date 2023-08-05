import { styled } from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    padding: 20px 50px;
    height: 250px;
    background-color: rgba(151, 225, 245, 0.29);
    margin-top: 100px;
    /* display: flex; */
        @media screen and (max-width: 1200px){
            flex-direction: column;
            gap: 15px;
            padding: 20px 10px;
        /* width: 16%; */
    }
`
export const ImageFot = styled.img`
    width: fit-content;
    margin: 0 -25px;
    @media screen and (max-width: 1200px){
        width: 50%;
            /* flex-direction: column; */
        /* width: 16%; */
    }
`

export const FooterWrapper1 = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;
    background-color: rgba(151, 225, 245, 0.29);
    margin-top: 100px;
`

export const FooterCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: auto;
    gap: 1rem;
        @media screen and (max-width: 1200px){
            flex-direction: row;
            width: 90%;
            margin: auto;
            align-items: center;
            gap: 40px;
        /* width: 16%; */
    }
`

export const FooterText = styled.p`
    color: #000;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 500;
margin: 0;
text-align: initial;
line-height: normal;
@media screen and (max-width: 1200px){
    font-size: 0.7rem;
    width: 90%;
    }
`

export const FooterTitle = styled.p`
    color: #000;
font-family: Montserrat;
font-size: 1.5rem;
text-align: initial;
font-style: normal;
font-weight: 500;
@media screen and (max-width: 1200px){
    font-size: 1rem;
    }
`