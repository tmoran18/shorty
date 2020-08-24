import React from 'react'
import Button_primary from './Button_primary';

const Hero = () => {
    return (
        <div className="container flex_5050" >
            <div className="hero_container">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <Button_primary button_text={"Get Started"} />
            </div>
            <div><img className="hero_img" src="./assets/rocket_ship.png" alt=""/></div>
        </div>
    )
}

export default Hero
