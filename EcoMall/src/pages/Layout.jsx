import React from 'react'
import Home from './Home'
import Error from './Error'
import RegisterPage from './RegisterPage'
import OT from './OT'
import About from './About'

const Layout = () => {
  return (
    <div>
        <Home/>
        <Error/>
        <RegisterPage/>
        <OT/>
        <About/>
    </div>
  )
}

export default Layout