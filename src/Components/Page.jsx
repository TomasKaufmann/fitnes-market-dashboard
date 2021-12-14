import React from 'react'
import Menu from './Menu'
import Content from './Content'
import styled from 'styled-components'

export default function Page() {
    return (
        <StyledDiv>
            <Menu/>
            <Content/>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`

display: flex;
width: 100%;
height: 100%;

`
