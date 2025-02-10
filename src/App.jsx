import React from 'react'
import AdminRoutes from './Routes/AdminRoutes'
import UserRoutes from './Routes/UserRoutes'
import UseLenis from './Hooks/UseLenis'

const App = () => {
  UseLenis()
  return (
    <div>
      <AdminRoutes/>
      <UserRoutes/>
    </div>
  )
}
export default App