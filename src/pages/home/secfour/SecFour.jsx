import React from 'react'
import styles from './SecFour.module.css'

const SecFour = () => {
  return (
    <section className={styles.guests}>
    <h2 style={{fontSize:'35px'}}>Featured Guests</h2>
    <div className={styles.guestlist}>
      <div className={styles.guestcard}>
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Megan Smith" />
        <h3>Megan Smith</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?</p>
      </div>
      <div className={styles.guestcard}>
        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Brooke Cagle" />
        <h3>Brooke Cagle</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?</p>
      </div>
      <div className={styles.guestcard}>
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Philip Martin" />
        <h3>Philip Martin</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?</p>
      </div>
    </div>
  </section>
  )
}

export default SecFour