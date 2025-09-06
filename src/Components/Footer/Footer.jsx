import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import linkedin_icon from '../assets/linkedin.png'
import github_icon from '../assets/github.png'
import email_icon from '../assets/email.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>SHOOPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <a href="https://github.com/itanmay728" target='_blank'>
                <img src={github_icon} alt="" />
                </a>
                
            </div>
            <div className="footer-icons-container">
                <a href="https://www.linkedin.com/in/myselftanmay/" target='_blank'>
                <img src={linkedin_icon} alt="" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="mailto:ktanmay1130@gmail.com">
                    <img src={email_icon} alt="" />
                </a>
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer