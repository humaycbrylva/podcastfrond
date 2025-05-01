import React from 'react'
import styles from './TwoCard.module.css'

const TwoCard = ({item}) => {
  return (
    <div className={styles.card}>
        <img src={item.image} alt="" />
        <div className={styles.about}>
           <h5 className={styles.title}>{item.title}</h5>
           <p className={styles.achievment}>{item.achievment}</p> 

        </div>
          
    </div>
  )
}

export default TwoCard