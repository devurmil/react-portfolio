import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
      <div className='bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 min-h-screen'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
