import React from 'react'
import styled from 'styled-components'

export default function Hero({title,img,max,children}) {
    return (
        <BannerWrapper img={img} max={max} >
            <div className="banner">
                <h1 className="text-capitalize pb-4">{title}</h1>
                {children}
            </div>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${props => props.img}) center/cover no-repeat;
    height : ${props => props.max ? "100vh" : "80vh"};
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;
    color :#fff
    
    
`