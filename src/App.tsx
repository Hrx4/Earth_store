import React from 'react'
import './App.css'
import Home from './screens/Home'
import { Route, Routes } from 'react-router-dom'
import About from './screens/About'
import Shop from './screens/Shop'
import Contact from './screens/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import Profile from './screens/Profile'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/profile' element={<Profile/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
