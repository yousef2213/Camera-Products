import React from 'react'
import {CameraConsumer} from '../context/context'

export default function CartTotal({clearCart}) {
    return (
        <>
            <CameraConsumer>
                {value =>{
                    const {carttotal} = value
                    return(
                        <div className="col-10 mx-auto text-center py-3">
                            <button className="btn btn-outline-danger" onClick={clearCart}>Clear Cart</button>
                            <h5 className="pt-3">Total : <span className="text-danger">$ {carttotal} </span></h5>
                        </div>
                    )
                }}  
            </CameraConsumer>
        </>
    )
}

// <CameraConsumer>
// <div className="col-10 mx-auto text-center py-3">
//     <button className="btn btn-outline-danger">Clear Cart</button>
//     <h5 className="pt-3">Total :  </h5>
// </div>
// </CameraConsumer>