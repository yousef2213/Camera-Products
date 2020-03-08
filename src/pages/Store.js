import React from 'react'
import Single from '../image/single.jpeg'
import Hero from '../Component/Hero'
import {CameraConsumer} from '../context/context'
import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown
} from 'react-icons/fa'
import CartTotal from '../Component/CartTotal'
import Mohen from '../Component/Paypal'

export default function Store() {
    return (
        <section>
            <Hero img={Single} />
            <CameraConsumer>
                {value =>{
                    const {Cart,removeItem,clearCart,carttotal} = value;
                    return(
                        <div className="container py-5">
                            <div className="row py-4">
                                <div className="col-4 mx-auto text-center">
                                    <h6 className="text-capitalize">product</h6>
                                </div>
                                <div className="col-4 mx-auto text-center">
                                    <h6 className="text-capitalize">price</h6>
                                </div>
                                <div className="col-4 mx-auto text-center">
                                    <h6 className="text-capitalize">remove</h6>
                                </div>
                            </div>
                            {Cart.map(item => {
                                return(
                                    <div className="row py-2" key={item.id}>
                                        <div className="col-4 mx-auto text-center py-2">
                                            <img src={item.image} width="70" />
                                        </div>
                                        <div className="col-4 mx-auto text-center py-2 align-items-center">
                                            <h6 className="text-danger">$  {item.price}</h6>
                                        </div>
                                        <div className="col-4 mx-auto text-center py-2">
                                            <FaTrash className="text-danger icons-item" onClick={()=> removeItem(item.id)} />
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="row">
                                <CartTotal clearCart={clearCart} />
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto text-center">
                                    <Mohen carttotal={carttotal} clearCart={clearCart} />
                                </div>
                            </div>
                            
                            
                        </div>
                    )
                }}
            </CameraConsumer>
        </section>
    )
}