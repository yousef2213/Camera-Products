import React from 'react'
import Title from '../Title'
import {CameraConsumer} from '../../context/context'
import Product from '../Product'

export default function Featured() {
    return (
        <CameraConsumer>
            {value =>{
                const {products} = value;
                return(
                    <>
                        <div className="container py-5">
                            <Title title="products" center="true" />
                            <div className="row py-3">
                                {products.map( product =>{
                                    return(
                                        <Product key={product.id} product={product} />
                                    )
                                } )}
                            </div>
                        </div>
                    </>    
                )
            }}
        </CameraConsumer>
    )
}


