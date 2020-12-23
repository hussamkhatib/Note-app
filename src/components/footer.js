import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
height: 5vh;
background: #c35d89;
`
const Small =  styled.small`
color: #e6f4f1;
`

const Footer = () => {

    return (
        <Foot>
            <Small>
                Copyright ©        
            </Small>
        </Foot>
    )
}

export default Footer
