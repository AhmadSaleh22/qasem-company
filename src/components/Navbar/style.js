import { styled } from "styled-components";

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
            @media screen and (max-width: 1200px){
              display: none;
        /* width: 100%; */
        /* text-align: center; */
        /* text-align: ${props => props.ab && 'initial'}; */
    }
`

export const NavbarItems = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
`

export const NavbarItem = styled.a`
  text-decoration: none;
  position: relative;
  color: #000;
  font-family: Montserrat;
font-size: 1.1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
  &:hover {
    /* Adding an underline using a pseudo-element */
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #97E1F5;
    }
  }
`