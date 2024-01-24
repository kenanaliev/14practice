import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    <footer id='footer'>
     <div className="time">
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
     </div>

     <div className="quick">
        <h3>Quick Links</h3>
        <ul>
            <li>About</li>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
        </ul>
     </div>
     <div className="new">
        <h3>New Products</h3>
        <ul>
            <li>Woman Cloth</li>
            <li>Fashion Accessories</li>
            <li>Man Accessories</li>
            <li>Rubber made Toys</li>
        </ul>
     </div>
     <div className="support">
        <h3>Support</h3>
        <ul>
            <li>Frequently Asked Questions</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Report a Payment Issue</li>
        </ul>
     </div>
     <div className="copy">
     <h4>Copyright ©2024 All rights reserved | This template is made with by Colorlib</h4>
     </div>
    
    </footer>
  )
}

export default Footer