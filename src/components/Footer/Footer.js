import React from 'react'
import { FooterCol, FooterText, FooterTitle, FooterWrapper, ImageFot } from './style'
import img1 from '../../assets/image 18.png'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterCol>
        <ImageFot src={img1} alt='' />
        <FooterText>
          Find your company experts on water
          wells drilling for your Living safety
          by water.
        </FooterText>
      </FooterCol>
      <FooterCol>
        <FooterTitle>
          Website
        </FooterTitle>
        <FooterText>
          www.qassemco.com
        </FooterText>
      </FooterCol>
      <FooterCol>
        <FooterTitle>
          Address
        </FooterTitle>
        <FooterText>
          Akaria Plaza, Gate “D”, Level 6 Olaya Main Street Riyadh Kingdom
          of Saudi Arabia P.O Box 86334 Riyadh 11622
        </FooterText>
      </FooterCol>
      <FooterCol>
        <FooterTitle>
          Mobile Number
        </FooterTitle>
        <FooterText>
          (+966) 11 486 8526
        </FooterText>
        <FooterText>
          (+966) 50 548 8123
        </FooterText>
        <FooterText>
          (+966) 54 762 8464
        </FooterText>
      </FooterCol>
    </FooterWrapper>
  )
}
