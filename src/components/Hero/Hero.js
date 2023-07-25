import React from 'react'
import { ButtonAction, HeroContentWrapper, HeroWrapper, TextHero, TitleHero, TitleHeroTip } from './style'
import img1 from '../../assets/Ellipse 10.png'

export default function Hero() {
    return (
        <HeroWrapper>
            <HeroContentWrapper>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <TitleHeroTip>Water Well Drilling</TitleHeroTip>
                <TitleHero>
                    Find your company experts on water wells drilling for your Living safety by water
                </TitleHero>

                </div>
                <TextHero>
                    Qassem Company Limited is a construction company experts in water wells drilling operations ranging
                    from 150 mm boreholes up to 1000 mm diameters, Well Consultation, Water Desalination
                    Plants, Building water Supply for Construction sites, Dewatering, and Car wash Services
                    . We offer full services to our clients extending from design, construction, installation
                    development, pumping test , water pump supply & installation, commissioning as well as
                    licensing. Our team of expert's  engineers provide the highest level of service to
                    our client in a timely professional and cost-effective manner.
                </TextHero>
            <ButtonAction>Contact Us</ButtonAction>
            </HeroContentWrapper>
            <img style={{
                width: '50%',
                height: '1000px',
                margin: 'auto'
            }} src={img1} alt='' />
        </HeroWrapper>
    )
}
