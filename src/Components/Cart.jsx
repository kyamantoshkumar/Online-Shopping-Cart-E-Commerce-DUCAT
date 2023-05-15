import React,{useContext} from 'react'

import { CartContext } from '../Store/CartContext'
export default function Cart() {
    var {cart} = useContext(CartContext)
    console.log(cart);
    return (
<<<<<<< HEAD
        <div>Cart
        <h2>Card 2</h2>
        </div>
        
=======
        <div>Cart</div>
>>>>>>> 579362ff238e026c54e4c7b3fe4a521444cd71ed
    )
}
