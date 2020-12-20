import React from 'react'
import styled from 'styled-components'
import  Lines  from '../lines.png' 

const Text = () => {
    const Wrapper = styled.div`
    grid-column:2;
    grid-row:2;
    overflow: scroll;
    color: #000;
    background-image:url(${Lines});
    font-size: 1.2em;`

    return (
        <Wrapper spellCheck="false" contentEditable>
        </Wrapper>
    )
}

export default Text
