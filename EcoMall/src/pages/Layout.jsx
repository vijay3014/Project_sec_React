import React from 'react'
import Home from './Home'
import Error from './Error'
import RegisterPage from './RegisterPage'
import OT from './OT'
import ContactPG from './ContactPG'
import SL from './SL'
import BLG from './BLG'
import WLpg from './WLpg'
import Cart from './CartPages'
import About from './About'
import ProductGridPG from './ProdGridPG'

const Layout = () => {
  return (
    <div>
        <Home/>
        <Error/>
        <RegisterPage/>
        <OT/>
        <ContactPG/>
        <SL/>
        <BLG/>
        <WLpg/>
        <Cart/>
        <About/>
        <ProductGridPG/>
     </div>
  )
}

export default Layout