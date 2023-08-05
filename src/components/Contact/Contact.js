import React from 'react'
import { PhotoSection, PhotoSectionTitle } from '../Photo/style'
import { ButtonMap, ButtonSend, Form, Input, Label, TextField } from './style'
import { RowEl } from '../Clients/style'
import { Col } from '../What/style'

export default function Contact() {
    return (
        <PhotoSection>
            <PhotoSectionTitle>
                Contact Us
            </PhotoSectionTitle>
            <br />
            <br />
            <br />
            <Form action="mailto:eyad@qassemco.com" method="get" enctype="text/plain">
                <RowEl>

                    <Col full>
                        <Label>Phone Number *</Label>
                        <Input placeholder='Phone Number' />
                    </Col>
                    <Col full>
                        <Label>Full Name *</Label>
                        <Input placeholder='Full Name' />
                    </Col>
                </RowEl>
                <br />
                <RowEl>
                    <Col fully>
                        <Label>Email *</Label>
                        <Input placeholder='Email Address' />
                    </Col>
                </RowEl>
                <br />
                <RowEl>
                    <Col fully>
                        <Label>Message *</Label>
                        <TextField placeholder='Your Message' />
                    </Col>
                </RowEl>
                <br />
                <br />

                <RowEl cent>
                    <ButtonSend> Send E-Mail</ButtonSend>
                </RowEl>
            </Form>
            <br />
            <br />
            <br />
            <ButtonMap>See on Google Maps</ButtonMap>
        </PhotoSection>
    )
}
