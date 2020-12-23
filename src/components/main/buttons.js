import React from 'react'
import styled from 'styled-components'


    const Button = styled.button`
    ${btn => btn.equal && 'grid-row: span 2;'}
    ${btn => btn.tax && 'grid-column: span 2;'}`
const Buttons = () => {
    const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    `
    
    const buttons = ['AC','⌫','÷','×','7','8','9','-','4','5','6','+','1','2','3','=','0','.','%','+TAX','-TAX']

    
    return (
        <Wrapper>
            {buttons.map(btn => (
                <Button key={btn} equal={btn === '='} tax={btn === '+TAX' || btn === '-TAX'}>
                    {btn}
                </Button>
            ))}

        </Wrapper>
    )
}

export default Buttons
