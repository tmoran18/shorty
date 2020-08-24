import React from 'react'
import '../css/navbar.css'
import Button_primary from './Button_primary'

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
            <a href="">Login</a>
            <Button_primary button_text="Sign Up" />
          </div>  
        </nav>
    )
}

export default Navbar
