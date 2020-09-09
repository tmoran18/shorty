import React from 'react'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={`${styles.footer} ${styles.container}`} >
                <div>
                    <h2>Shortly</h2>
                </div>
                <div>
                    <ul>
                        <li className={styles.list_title}>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={styles.list_title}>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={styles.list_title}>Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <img src="../assets/icon-facebook.svg" alt=""/>
                    <img src="./assets/icon-instagram.svg" alt=""/>
                    <img src="./assets/icon-pinterest.svg" alt=""/>
                    <img src="./assets/icon-twitter.svg" alt=""/>
                </div>
            </footer>
        </div>
    )
}

export default Footer
