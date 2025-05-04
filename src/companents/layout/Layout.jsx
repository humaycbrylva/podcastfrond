import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
    
  
}

export default Layout