import React from 'react'

import Navi from '../nav'

import Text from './text'
import Calc from './calc'

import Footer from '../footer'

import styled from 'styled-components'


const Grid = styled.div`
display: grid;
grid-template-columns: .2fr 3fr 1fr;
height:85vh;`

const Main = () => {
  

    return (
        <div>
            <Navi />
            <Grid>
                <b />
                <Text />
                <Calc />
            </Grid>
            <Footer />
        </div>
    )
}

export default Main
