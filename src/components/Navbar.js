import React from 'react'
import '../css/navbar.css'
import ButtonPrimary from './ButtonPrimary'

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="menu">
            <div className="logo">Shorty</div>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
          </div>
          <div className="login">
            <a href="#">Login</a>
            <ButtonPrimary button_text="Sign Up" />
          </div>  
        </nav>
    )
}

export default Navbar
