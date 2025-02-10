import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/User/Home'

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default UserRoutes
