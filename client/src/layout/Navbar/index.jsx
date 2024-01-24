import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='nav'>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="list">
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Latest</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>Contact</li>
                    <li><NavLink to={"/Add"}>Add</NavLink></li>
                </ul>
            </div>
            <div className="icons">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    )
}

export default Navbar