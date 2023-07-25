import React from 'react'
import { WhatSection, WhatSectionTitle } from '../What/style'
import { Colom, RowEl, TypoClient } from './style'
import img1 from '../../assets/image 20.png'
import img2 from '../../assets/image 21.png'
import img3 from '../../assets/image 22.png'
import img4 from '../../assets/image 23.png'
export default function Clients() {
    return (
        <WhatSection>
            <WhatSectionTitle> Some Of Our Clients</WhatSectionTitle>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <RowEl>
                <Colom>
                <img src={img1} alt='' />
                <TypoClient>+100 Jobs</TypoClient>
                </Colom>

                <Colom>
                <img src={img2} alt='' />
                <TypoClient>+15 Jobs</TypoClient>

                </Colom>

                <Colom>
                <img src={img3} alt='' />
                <TypoClient>+20 Jobs</TypoClient>

                </Colom>

                <Colom>
                <img src={img4} alt='' />
                <TypoClient>+50 Jobs</TypoClient>

                </Colom>
            </RowEl>
        </WhatSection>
    )
}
