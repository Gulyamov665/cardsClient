import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Login from './app/Login'
import Promo1 from './app/Promo1'
import Promo2 from './app/Promo2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/promo1" element={<Promo1 />} />
      <Route path="/promo2" element={<Promo2 />} />
    </Routes>
  )
}

export default App
