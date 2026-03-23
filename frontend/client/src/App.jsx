
import './App.css'


import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'

import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Profile from './Pages/Profile.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'

import { ToastContainer } from 'react-toastify';
import PublicRoute from './Components/PublicRoute.jsx'
import Restricted from './Pages/Restricted.jsx'

const App = () => {
  return (
    <>

    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition={Bounce}
/>
    <Navbar />

    

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
       <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
      <Route path="/about" element={<ProtectedRoute allowed={["user","admin"]}><About/></ProtectedRoute>} />
       <Route path="/profile" element={<ProtectedRoute allowed={["admin"]}><Profile/></ProtectedRoute>} />
       <Route path="/restricted" element={<Restricted/>} />

    </Routes>

    
    </>
  )
}

export default App

