import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'

import ProductContextProvider from './Store/ProductContext'
import CartContextProvider from './Store/CartContext'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
       <ProductContextProvider>
           <CartContextProvider>
               <App/>
           </CartContextProvider>
       </ProductContextProvider>
    </>
)

