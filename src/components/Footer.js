import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer" >
                <div className="footer_col">
                    <h2>Shortly</h2>
                </div>
                <div className="footer_col">
                    <ul>
                        <li className='list_title'>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="footer_col">
                    <ul>
                        <li className='list_title'>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="footer_col">
                    <ul>
                        <li className='list_title'>Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer_col">
                    <img src="./assets/icon-facebook.svg" alt=""/>
                    <img src="./assets/icon-instagram.svg" alt=""/>
                    <img src="./assets/icon-pinterest.svg" alt=""/>
                    <img src="./assets/icon-twitter.svg" alt=""/>
                </div>
            </footer>
        </div>
    )
}

export default Footer
