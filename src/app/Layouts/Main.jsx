import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Main({ children }) {
  const [auth, setAuth] = useState(() =>
    localStorage.getItem('pin') ? localStorage.getItem('pin') : null
  )

  if (!auth) {
    return <Navigate to="/" />
  }
  return <div className="main">{children}</div>
}

export default Main
