import React from 'react'
import { PhotoSection, PhotoSectionTitle } from './style'
import Swipe from '../Swipe/Swipe'

export default function Photo() {
  return (
    <PhotoSection>
        <PhotoSectionTitle>
        Photo Gallery
        </PhotoSectionTitle>
        <br />
        <br />
        <br />
        <Swipe />
    </PhotoSection>
  )
}
