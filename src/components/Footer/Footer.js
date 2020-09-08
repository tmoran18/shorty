import React from 'react'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer} >
                <div className={styles.footer_col}>
                    <h2>Shortly</h2>
                </div>
                <div className={styles.footer_col}>
                    <ul>
                        <li className={styles.list_title}>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className={styles.footer_col}>
                    <ul>
                        <li className={styles.list_title}>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className={styles.footer_col}>
                    <ul>
                        <li className={styles.list_title}>Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.footer_col}>
                    <img src="../../assets/icon-facebook" alt=""/>
                    <img src="./assets/icon-instagram.svg" alt=""/>
                    <img src="./assets/icon-pinterest.svg" alt=""/>
                    <img src="./assets/icon-twitter.svg" alt=""/>
                </div>
            </footer>
        </div>
    )
}

export default Footer
