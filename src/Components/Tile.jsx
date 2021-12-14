import React from 'react'
import styled from 'styled-components'

export default function Tile({title, data}) {
    return (
        <div>
            <p>{title}</p>
            <p>{data}</p>
        </div>
    )
}

const div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    margin: 1%;
    width: 30%;
    height: 60%;
    background-color: #e28f57;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);

`