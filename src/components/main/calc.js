import React from 'react'
import styled from 'styled-components'
import Buttons from './buttons'

const Wrapper = styled.div`
`

const Res = styled.div`
`

const Calc = ({ Result }) => {
 
    return (
        <Wrapper>
            <Res>
                Result: {Result} 
            </Res>      
            <Buttons />  
        </Wrapper>
    )
}

export default Calc
