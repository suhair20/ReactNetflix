
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return(
   <>
  <AuthContextProvider>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    <Route path='/Signup' element={<Signup/>}/>

  
  </Routes>
  </AuthContextProvider>
  </>
  )
  
}

export default App
