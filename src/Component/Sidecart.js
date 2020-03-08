import React from 'react'
import {CameraConsumer} from '../context/context'
import styled from 'styled-components'
import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown
} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Sidecart() {
    return (
        <CameraConsumer>
            {value =>{
                
                const {sidecart,Cart,carttotal,increment,decrement} = value;
                
                return(
                    <CartWrapper show={sidecart}>
                        <ul>
                            {Cart.map( item =>{
                                return(
                                    <li key={item.id} className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src={item.image} width="80" />
                                            <h6>{item.name}</h6>
                                            <h6>$ {item.price}</h6>
                                            <h6>Count : {item.count}</h6>
                                        </div>
                                        <div className="icons pl-4">
                                            <h6><FaChevronCircleUp className="icons-item" onClick={()=> increment(item.id)} /></h6>
                                            <h6><FaChevronCircleDown className="icons-item" onClick={()=> decrement(item.id)} /></h6>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="text-center py-5">
                        <h4 className="text-danger text-center">Total : $ {carttotal}</h4>
                        <Link to="/store" className="btn btn-dark px-5 mx-auto">Store</Link>
                        </div>

                    </CartWrapper>
                )
            }}
        </CameraConsumer>
    )
}

const CartWrapper = styled.nav`
    height: 100%;
    width: 100%;
    background: #f3f3f3;
    position: fixed;
    top: 60px;
    right: 0;
    z-index: 1;
    transition : 0.3s all ;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")} ;

    @media (min-width: 576px) {
        width: 20rem;
    }
    overflow:scroll

`