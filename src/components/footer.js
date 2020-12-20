import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const Foot = styled.footer`
    height: 5vh;
    background: #c35d89;
    `
    const Small =  styled.small`
    `
    
    return (
        <Foot>
            <Small>
                Copyright ©        
            </Small>
        </Foot>
    )
}

export default Footer
