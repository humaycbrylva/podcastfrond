import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div className={styles.endiv}><h3>Copyright ©2025 All rights reserved | This template is made with <FaHeart/> by Colorlib</h3></div>
    </footer>
  )
}

export default Footer