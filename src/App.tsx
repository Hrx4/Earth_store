import React from 'react'
import './App.css'
import Home from './screens/Home'
import { Route, Routes } from 'react-router-dom'
import About from './screens/About'
import Shop from './screens/Shop'
import Contact from './screens/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/> 
     </Routes>
     <Footer/>
    </>
  )
}

export default App
