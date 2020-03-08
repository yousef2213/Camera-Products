import React from 'react'
import styled from 'styled-components'

export default function Title({title,center}) {
    return (
        <TitleWrapper center={center}>
            <h2 className="title">{title}</h2>
            <div className="inderline"></div>
        </TitleWrapper>
    )
}

const TitleWrapper =styled.div`
.title{
    text-transform: capitalize;
    text-align: ${props => props.center ? "center" : "left"};
};
.inderline{
    width: 5rem;
    height: 5px;
    background: var(--primaryColor);
    margin: ${props => props.center ? "0 auto" : "0"};
}

`