import { styled } from "styled-components";

export const WhatSection = styled.div`
    width: 90%;
    margin: 80px auto;

`
export const WhatSectionTitle = styled.p`
    color: #4F4E9C;
font-family: Montserrat;
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
position: relative;
text-align: center;
margin: auto;
&::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 40%;
      right: auto;
      margin: auto;
      text-align: center;
      width: 20%;
      height: 3px;
      background-color: #97E1F5;
    }
`

export const WhatSectionText = styled.p`
    color: #000;
text-align: center;
font-family: Montserrat;
font-size: 1.2rem;
font-style: normal;
width: 60%;
margin: 50px auto;
font-weight: 400;
line-height: normal;
text-align: center;
    `

    export const WhatDo = styled.p`
    color: #000;
text-align: center;
font-family: Montserrat;
font-size: 2.1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: initial;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 50px 0;

`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const Circle = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.selected ? '#0251EB' : '#D9D9D9'};
    max-width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
`

export const WhatTitle = styled.p`
    color: #000;
text-align: center;
font-family: Montserrat;
text-align: initial;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 0;
color: ${props => props.selected ? '#0251EB' : '#000'};
`

export const WhatText = styled.p`
margin: 15px 0;
    color: rgba(0, 0, 0, 0.70);
font-family: Montserrat;
text-align: initial;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`