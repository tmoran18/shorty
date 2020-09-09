import React, { useState, useEffect } from 'react'
import styles from '../BurgerMenu/BurgerMenu.module.css'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'


const BurgerMenu = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    
    // Custom window Width Hook
    const useWindowWidth = () => {
    // Initialize state with undefined width so server and client renders match
    const [windowWidth, setwindowWidth] = useState({ width: undefined});
  
    useEffect(() => {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width to state
        setwindowWidth({ width: window.innerWidth });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowWidth;
  }
  // Handle Navbar Hamburger click
  const handleNavClick = () => {
      // if Mobile Nav is Open - set it to closed - Else set to open
      mobileNavOpen ? setMobileNavOpen(false) : setMobileNavOpen(true);
  }
  // close mobile nav on menu open
  const handleCloseNavOnResize = () => {
    window.innerWidth > 950 && setMobileNavOpen(false);
  }
  // event listener for resize to close mobile nav
  window.addEventListener("resize", handleCloseNavOnResize);
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <div className={styles.logo}>Shorty</div>
            <img onClick={handleNavClick} className={styles.burger_img} src="../../assets/burger-menu.svg" alt=""/>
            <div className={`${styles.mobile_menu_container} ${mobileNavOpen ? styles.navOpen : styles.navClosed}`} >
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <a href="#">Login</a>
                <ButtonPrimary button_text="Sign Up" />
            </div>
        </div>
    )
}

export default BurgerMenu
