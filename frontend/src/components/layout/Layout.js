import React from 'react'
import {  Outlet } from "react-router-dom"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Body from '../body/Body'
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Body/>
      <Footer/>
      
    </div>
  )
}

export default Layout