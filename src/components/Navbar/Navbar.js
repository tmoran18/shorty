import React from 'react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import styles from '../Navbar/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <div className={styles.menu}>
            <div className={styles.logo}>Shorty</div>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
          </div>
          <div className={styles.login}>
            <a href="#">Login</a>
            <ButtonPrimary button_text="Sign Up" />
          </div>  
        </nav>
    )
}

export default Navbar
