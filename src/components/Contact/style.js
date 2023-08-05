import { styled } from "styled-components";

export const Input = styled.input`
    border-radius: 2.59375rem;
background: #EFEFEF;
width: 100%;
border: none;
height: 3rem;
color: #888;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
padding: 0 25px;
line-height: normal;
`
export const Label = styled.label`
    color: #888;
    padding: 10px 15px;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: initial;
`

export const TextField = styled.textarea`
    width: 100%;
    height: 13rem;
    margin: auto;
background: #EFEFEF;
    border-radius: 2.59375rem;
padding: 20px 25px;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
    border: none;
    resize: none;
`

export const ButtonSend = styled.button`
    border: none;
    border-radius: 1.78125rem;
background: #4F4E9C;
width: 25rem;
height: 3rem;
color: #FFF;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
position: relative;
&::after {
      content: '';
      position: absolute;
      bottom: -30px;
      width: 80%;
      height: 8px;
      margin: auto;
      justify-content: center;
      display: flex;
      align-items: center;
      border-radius: 15px;
      background-color: #97E1F5;
    }
`

export const ButtonMap = styled.button`
    width: 18rem;
height: 2.8rem;
border-radius: 1.78125rem;
background: linear-gradient(0deg, rgba(0, 213, 255, 0.55) 0%, rgba(0, 213, 255, 0.55) 100%), linear-gradient(0deg, rgba(248, 53, 71, 0.32) 0%, rgba(248, 53, 71, 0.32) 100%), rgba(0, 240, 118, 0.99);
color: #FFF;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
`