import React from 'react'
import Home from './Home'
import Error from './Error'
import RegisterPage from './RegisterPage'
import OT from './OT'

const Layout = () => {
  return (
    <div>
        <Home/>
        <Error/>
        <RegisterPage/>
        <OT/>
    </div>
  )
}

export default Layout