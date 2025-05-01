import React from 'react'
import styles from './ThreeCard.module.css'

const ThreeCard = ({item}) => {
  return (
    <div className={styles.card}>
        <img src={item.image} alt="" />
        
          
    </div>
  )
}

export default ThreeCard