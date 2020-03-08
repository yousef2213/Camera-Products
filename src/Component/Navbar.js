import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../image/logo.jpg'
import {FaCartPlus} from 'react-icons/fa'
import {CameraConsumer} from '../context/context'
export default function Navbar(props) {
    return (
        <CameraConsumer>
            {value =>{
                const {handelSideCart,cartItem} = value;
                const {SingOut} = props;
                return(
                    <NavBarWeapper>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" className="img-logo" />
                        </Link>
                        <ul className="links">
                            <li className="link home">
                                <Link className="text-capitalize " to="/" >Home</Link>
                            </li>
                            <li className="link store">
                                <Link className="text-capitalize" to="/store" >store</Link>
                            </li>
                            <li className="link">
                            <button className="flex-signout"  id="signout" onClick={SingOut} >Sign Out</button>
                            </li>
                        </ul>
                        <div className="cart">
                            <FaCartPlus className="cart-link" onClick={handelSideCart} />
                            <span>{cartItem}</span>
                        </div>
                    </NavBarWeapper>
                )
            }}
        </CameraConsumer>
    )
}

const NavBarWeapper = styled.nav`
    display : flex;
    align-items: center;
    justify-content : space-between;
    height:60px;
    position: sticky;
    position: -webkit-sticky;
    width: 100%;
    top:0;
    background : #fff;
    padding-left :28px;
    z-index: 1;
    overflow:hidden;

    .links{
        display : flex;
        align-items: center;
        list-style: none;
        padding: 0;
        li{
            padding :38px 20px 20px 20px;
            display : inline-block;
            a {
                font-family: 'Montserrat', sans-serif;
                &:hover{
                    text-decoration : none;
                }
            }
        }
    }
    .img-logo{
        width: 110px;
        height:60px;
    }
    @media (max-width: 600px) {
        width: 100%;
        padding-left:0;
        justify-content : center;
        .cart{
            margin: 0;
            padding-right :13px
        }
        .links{
            li{
                padding :38px 5px 20px 5px;
            }
            .home{
                padding-right :10px
            }
            .store{
                padding-right:10px
            }
        }
    }
`