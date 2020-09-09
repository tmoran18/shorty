import React from 'react'
import styles from '../Banner/Banner.module.css'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'


const Banner = () => {
    return (
        <div id={styles.banner}>
            <h2>Boost your links today</h2>
            <ButtonPrimary button_text={"Get Started"} />
        </div>
    )
}

export default Banner
