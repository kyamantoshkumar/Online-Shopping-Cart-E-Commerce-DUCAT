import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Cart'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Narvbar'
import Profile from './Profile'
import Shop from './Shop'
import Signup from './Signup'
import SingleProductPage from './SingleProductPage'
export default function App() {
    return (
        <>  
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop/:mc/:sc/:br" element={<Shop/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path='/single-product-page/:_id' element={<SingleProductPage/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}
