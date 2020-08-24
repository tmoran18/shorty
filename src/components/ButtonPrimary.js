import React from 'react'
import '../css/button_primary.css'

const ButtonPrimary = ({ button_text }) => {
    return (
        <div>
            <button className="btn_primary" >{button_text}</button>
        </div>
    )
}

export default ButtonPrimary
