import React from 'react'
import {CameraConsumer} from '../context/context'
import Singleimg from '../image/single.jpeg'
import Hero from '../Component/Hero'
import {Link} from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa'

export default function Single(props) {
    
    return (
        <>
            <CameraConsumer>
                {value =>{
                    const {singleproduct,addToCart} = value;
                    
                    const {
                        image,
                        price,
                        name,
                        des,
                        id
                    } = singleproduct
                    

                    return(
                        <>
                        <Hero img={Singleimg}>
                            <Link to="/" className="btn btn-danger">Back Products</Link>
                        </Hero>
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-sm-10 col-md-6 py-5">
                                    <img src={image} alt="Single Product" style={{height:"300px" , width:"300px"}} />
                                </div>
                                <div className="col-10 mx-auto col-sm-10 col-md-6 py-5">
                                    <h6 className="text-capitalize mb-3">name : {name}</h6>
                                    <h6 className="text-capitalize">price : <span className="text-danger">$   {price}</span></h6>
                                    <p className="text-capitalize mb-1">this is description : </p>
                                    <p className="text-capitalize text-muted">{des}</p>
                                    <button className="iconn" onClick={()=> addToCart(id)}>
                                        <FaCartPlus />  Add To Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                        </>
                    )
                }}
            </CameraConsumer>
        </>
    )
}
