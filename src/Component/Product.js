import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {CameraConsumer} from '../context/context'

export default function Product({product}) {
    return (
        <CameraConsumer>
            {value =>{
                const {setSingle,addToCart} = value;
                return(
                    <div className="col-10 col-sm-8 mx-auto col-md-4 py-5">
                        <div className="img-container">
                            <img src={product.image} className="img-fluid imgs" style={{height:"350px"}} />
                            <div>
                                <Link to="/" className="but" onClick={ () => addToCart(product.id)}>Cart</Link>
                            </div>
                            <div>
                                <Link to={`/single/${product.id}`} onClick={ ()=> setSingle(product.id) }>
                                    <FaSearch className="search" />
                                </Link>
                            </div>
                        </div>
                        <h5 className="pt-4">{product.name}</h5>
                        <h5 className="pt-1 text-danger" >  $ {product.price}</h5>
                    </div>
                )
            }}
        </CameraConsumer>
    )
}
