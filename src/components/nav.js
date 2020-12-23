import React from 'react'
import styled from 'styled-components'

const Navi =  styled.nav`
background: #c35d89;
height:10vh;`
const Header = styled.header`
padding: 1em;`
const H1 = styled.h1`
    color: #e6f4f1;
`

const Nav = () => {

    return (
        <Navi>
            <Header>
                <H1>
                    Calc App
                </H1>
            </Header>
        </Navi>
    )
}

export default Nav
