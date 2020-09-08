import React from 'react'
import styles from '../ButtonPrimary/ButtonPrimary.module.css'

const ButtonPrimary = ({ button_text }) => {
    return (
        <div>
            <button className={styles.btn_primary} >{button_text}</button>
        </div>
    )
}

export default ButtonPrimary
