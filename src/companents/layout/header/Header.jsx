import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navdiv}>
        <div className={styles.headiv}><h1>Podca</h1></div>
        <div className={styles.linkdiv}>
          <Link className={styles.link} to='/'>Home</Link>
          <Link className={styles.link} to='/formik'>Formik</Link>
          <Link className={styles.link} to='/about'>About</Link>
          <Link className={styles.link} to='/contact'>Contact</Link>
        </div>
        <div className={styles.icons1}>
          <div className={styles.icons2}><i><RxHamburgerMenu/></i></div>
        </div>
      </nav>
    </div>
  )
}

export default Header