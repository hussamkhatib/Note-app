import React from 'react'

import Nav from '../nav'

import Text from './text'
import Calc from './calc'

import Footer from '../footer'

import styled from 'styled-components'

const Main = () => {
    const Grid = styled.div`
    display: grid;
    grid-template-rows: 20px 1fr;
    grid-template-columns: .2fr 3fr 1fr;
    height:85vh;`

    return (
        <div>
            <Nav />
            <Grid>
                <Text />
                <Calc />
            </Grid>
            <Footer />
        </div>
    )
}

export default Main
