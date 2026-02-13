import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
 
    <BrowserRouter>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute>} />

    </Routes>
      
    </BrowserRouter>
  )
}

export default App


