import { styled } from "styled-components";
import img21 from '../../assets/Group.png'

export const HeroWrapper = styled.div`
    display: flex;
    background-image: url(${img21});
    background-size: cover;
  background-position: center;
  width: 100%;
  gap: 50px;
  height: 1312px;
  justify-content: space-between;

`
export const HeroContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 80px !important;
    margin: 40px auto;
    width: 40%;
    margin: 300px auto;
`

export const TitleHeroTip = styled.p`
    color: #3C3463;
font-family: Montserrat;
    margin: 0;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: initial;
`

export const TitleHero = styled.p`
    color: #4F4E9C;
    font-family: Montserrat;
    font-size: 2.375rem;
    text-align: initial;
    margin: 0;
    font-style: normal;
    position: relative;
    font-weight: 700;
    line-height: normal;
    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 80%;
      height: 5px;
      background-color: #97E1F5;
    }
`

export const TextHero = styled.p`
    color: #0251EB;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
text-align: initial;
line-height: 2.625rem; /* 175% */
`

export const ButtonAction = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 19.9375rem;
height: 5.375rem;
border-radius: 1.125rem;
color: #FFF;
font-family: Montserrat;
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: 2.625rem;

    border: none;
    color: white;
    background-color: #4F4E9C;

`