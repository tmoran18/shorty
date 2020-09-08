import React from 'react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Hero = () => {
    return (
        <div>
            <div>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <ButtonPrimary button_text={"Get Started"} />
            </div>
            <div><img className="hero_img" src="./assets/rocket_ship.png" alt=""/></div>
        </div>
    )
}

export default Hero
