
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


function App() {
  return <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/Signup' element={<Signup/>}/>

  
  </Routes>
  </>
    
  
}

export default App
