import React from 'react'
import styles from './SecOne.module.css'

const SecOne = () => {
  return (
    <div className={styles.header}>
        <div className={styles.textdivs}>
            <h1>Episode 09: How To Create </h1>
            <h1>Web Page Using Bootstrap 4</h1>
            <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
            <button className={styles.btns}>READ THE TRANSCRIPT</button>

        </div>
    </div>
  )
}

export default SecOne