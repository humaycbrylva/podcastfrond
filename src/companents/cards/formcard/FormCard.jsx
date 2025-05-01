import React from 'react'
import styles from './FormCard.module.css'

const FormCard = ({item,handleDelete,handleEdit}) => {
  return (
    <div className={styles.card}>
            <img src={item.image} alt="" />
            <div className={styles.about}>
               <h5 className={styles.title}>{item.title}</h5>
               <p className={styles.achievment}>{item.achievment}</p>
               <div className={styles.btns}>
                 <button className={styles.del} onClick={() => handleDelete(item._id)}>Delete</button>
                 <button className={styles.edit} onClick={() => handleEdit(item)}>Edit</button>

              </div> 
    
            </div>
              
        </div>
  )
}

export default FormCard