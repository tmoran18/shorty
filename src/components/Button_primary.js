import React from 'react'
import '../css/button_primary.css'

const Button_primary = ({ button_text }) => {
    return (
        <div>
            <button className="btn_primary" >{button_text}</button>
        </div>
    )
}

export default Button_primary
