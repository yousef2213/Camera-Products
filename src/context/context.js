import React, { Component } from 'react'
import {itemsData} from '../context/CameraData'

const CameraContext = React.createContext();

class CameraProvider extends Component {

    state = {
        products : [],
        singleproduct : {},
        sidecart : false,
        cartopen: false,
        Cart : [],
        carttotal: 0,
        cartItem : 0,
        isLogin : false
    }

    
componentDidMount(){
    this.CameraProducts(itemsData);
    
}

CameraProducts = (product) =>{
    let products= product.map(item =>{
        const product = {...item};
        return product
    });
    this.setState({
        products : product,
        singleproduct: {},
        Cart : this.getStorageCart()
    },()=>{
        this.addTotal()
    })
}

getStorageCart = ()=>{
    let cart;
    if(localStorage.getItem("Data")){
        cart = JSON.parse(localStorage.getItem("Data"))
    }else{
        cart = []
    }
    return cart
}
addTotal = ()=>{
    let cartitem = 0;
    let subtotal = 0;
    this.state.Cart.forEach( item =>{
        cartitem += item.count;
        subtotal += item.total 
    })
    subtotal = parseFloat(subtotal.toFixed(2))
    this.setState({
        cartItem : cartitem,
        carttotal : subtotal
    },()=>{
        this.StorageCart()
    })
}

addToCart = (id)=>{
    let tempCart = [...this.state.Cart];
    let tempProducts = [...this.state.products];
    let tempItem = tempCart.find(item => item.id === id);
    if(!tempItem){
        tempItem = tempProducts.find(item => item.id === id)
        let total = tempItem.price;
        let cartitem = {...tempItem,count:1,total}
        tempCart = [...tempCart,cartitem]
    }else{
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2))
    }
    this.setState( ()=>{
        return {Cart : tempCart}
    }, ()=>{
        this.addTotal()
        this.StorageCart()
    } )
    
}

StorageCart = ()=>{
    localStorage.setItem( "Data" , JSON.stringify(this.state.Cart) )
    
}


increment = (id)=> {
    let tempCart = [...this.state.Cart];
    let tempItem = tempCart.find(item => item.id === id)
    tempItem.count++;
    tempItem.total = tempItem.count * tempItem.price;
    this.setState({
        Cart : tempCart
    },()=>{
        this.addTotal()
        this.StorageCart()
    })
}

decrement = (id) => {
    let tempCart = [...this.state.Cart];
    let tempItem = tempCart.find(item => item.id === id)
    tempItem.count = tempItem.count - 1;

    if(tempItem.count === 0 ){
        this.removeItem(id)
    }else{
        tempItem.total = tempItem.count * tempItem.price;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
        this.setState({
            Cart : tempCart
        }, ()=>{
            this.addTotal()
            this.StorageCart()
        } )
}
}

removeItem = (id) =>{
    let tempCart = [...this.state.Cart]
    tempCart = tempCart.filter(item => item.id !== id)
    this.setState({
        Cart : [...tempCart]
    },()=>{
        this.addTotal()
        this.StorageCart()
    })
}

clearCart = ()=>{
    this.setState({
        Cart : []
    },()=>{
        this.addTotal()
        this.StorageCart()
    })
}

setSingle = (id) =>{
    let product = this.state.products.find(item => item.id === id)
    this.setState({
        singleproduct: {...product}
    })
    
}

handelSideCart = ()=>{
    this.setState({sidecart : !this.state.sidecart})
}

CartOpen = ()=>{
    this.setState({cartopen:true})
}
CartClose = ()=>{
    this.setState({cartopen:false})
}



    render() {
        return (
            <CameraContext.Provider value={{
                ...this.state,
                setSingle : this.setSingle,
                handelSideCart : this.handelSideCart,
                CartOpen : this.CartOpen,
                CartClose: this.CartClose,
                addToCart : this.addToCart,
                increment : this.increment,
                decrement : this.decrement,
                clearCart: this.clearCart,
                removeItem : this.removeItem
            }}>
                {this.props.children}
            </CameraContext.Provider>
        )
    }
}


const CameraConsumer = CameraContext.Consumer;

export {CameraConsumer,CameraProvider}