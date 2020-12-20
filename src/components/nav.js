import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    const Nav =  styled.nav`
    background: #c35d89;
    height:10vh;`
    const Header = styled.header`
    padding: 1em;`
    const H1 = styled.h1``
    return (
        <Nav>
            <Header>
                <H1>
                    Calc App
                </H1>
            </Header>
        </Nav>
    )
}

export default Nav
