import React from 'react'
import { Circle, Col, Row, WhatDo, WhatSection, WhatSectionText, WhatSectionTitle, WhatText, WhatTitle } from './style'
import img1 from '../../assets/image 24.png'
export default function What() {
    return (
        <WhatSection>
            <WhatSectionTitle> What We Do</WhatSectionTitle>
            <WhatSectionText>We offer full services to our clients extending from design, construction, installation development, pumping test ,water pump supply & installation, commissioning as well as licensing.</WhatSectionText>
            <WhatDo>Our Services</WhatDo>
            <Row>
                <div style={{
                    width: '80%'
                }}>

                    <Row>
                        <Circle>1</Circle>
                        <Col>
                            <WhatTitle>Design</WhatTitle>
                            <WhatText>
                                Design for Well with the analysis of the soil investigation report. simulation including:
                                • site characterization • model development • calibration • post-processing• visualization
                                with both finite-difference & finite-element models in 2D & 3D.
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle selected>2</Circle>
                        <Col>
                            <WhatTitle selected>Water Well Drilling</WhatTitle>
                            <WhatText>
                                The main resource of water in the Kingdom of Saudi Arabia is the underground water that requires
                                water drilling. Each water well has its own unique specification. Our methods of water well drilling:
                                ▪ Rotary Fluid Drilling ▪ Bentonite ▪ Foam ▪ Air ▪ Hamer Head Drilling
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle>3</Circle>
                        <Col>
                            <WhatTitle>Digital Camera Inspection</WhatTitle>
                            <WhatText>
                                It is essential to ensure that the well is functioning correctly and is maintained to avoid contamination
                                , decrease in water yield, or other potential issues.▪ Provides a Visual Record ▪ Identifies Potential
                                Problems ▪ Assists in Well Maintenance ▪ Helps in Troubleshooting ▪ Saves Time and Money
                                ▪ Provides Peace of Mind
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>

                        <Circle>4</Circle>
                        <Col>
                            <WhatTitle>Building Water Supply for Sites</WhatTitle>
                            <WhatText>
                                Almost all kind of construction project needs water. Providing a source of water is significantly
                                challenging in the early phases of a large construction project. We at Qassem provide you
                                with a sustainable solution by offering you a water well with a desalination plant for your
                                needs ▪ Supplying onsite facilities ▪ Concrete Batching ▪ Drilling and piling
                                ▪ Landscaping and pond filling ▪ Dust suppression ▪ Or Any other water needs
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle>5</Circle>
                        <Col>
                            <WhatTitle>Car Wash Service</WhatTitle>
                            <WhatText>
                                Contracted with a leading Car wash Service Provider “Sparkleyourcar” that offers a unique stations
                                with high-quality wash, and mobile car wash service with smart application solutions.
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle>6</Circle>
                        <Col>
                            <WhatTitle>Water Desalination Plants</WhatTitle>
                            <WhatText>
                                Central desalination plants (wells, farms, palaces, factories) with a daily production capacities
                                starting from 10 Cubic meters to specialized plants for factories and companies.
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle>7</Circle>
                        <Col>
                            <WhatTitle>Well Drilling & Re- habitation</WhatTitle>
                            <WhatText>
                                We offer services such as: Drilling Waterwells , Conductor Casing,Well Cementation, Deviation Survey, Water Well DigitalCamera Inspection, Troubleshooting, etc...
                            </WhatText>
                        </Col>
                    </Row>
                    <Row>
                        <Circle>8</Circle>
                        <Col>
                            <WhatTitle>Dewatering Service</WhatTitle>
                            <WhatText>
                                Dewatering services offered focus on the removal of groundwater to a level below the normal water table to
                                enable excavation and construction. Dewatering involves expertise in the design as various regions can have
                                different type of soil conditions. It also involves use of highly skilled resources, technology & application. Technical
                                evaluation, design and planning are extremely critical before the actual execution.
                            </WhatText>
                        </Col>
                    </Row>
                </div>
                <img style={{
                    width: '50%',
                    margin: '250px auto',
                    height: '900px'
                }} src={img1} alt='' />
            </Row>


        </WhatSection>
    )
}
