import React from 'react'
import { NavbarItem, NavbarItems, NavbarWrapper } from './style'
import logo from '../../assets/image 18.png'

export default function Navbar() {
  return (
    <NavbarWrapper>
        <img src={logo} alt='' />
        <NavbarItems>
            <NavbarItem>About us</NavbarItem>
            <NavbarItem>Contact us</NavbarItem>
            <NavbarItem>Our Services</NavbarItem>
        </NavbarItems>
        <NavbarItem>العربية</NavbarItem>

    </NavbarWrapper>
  )
}
