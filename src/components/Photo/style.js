import { styled } from "styled-components";

export const PhotoSection = styled.div`
    width: 95%;
    margin: auto;
`

export const PhotoSectionTitle = styled.p`
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