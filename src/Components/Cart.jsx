import React,{useContext} from 'react'

import { CartContext } from '../Store/CartContext'
export default function Cart() {
    var {cart} = useContext(CartContext)
    console.log(cart);
    return (
        <div>Cart
        <h2>Card 2</h2>
        </div>
        
    )
}
