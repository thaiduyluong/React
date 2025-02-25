import React from "react";
import { FaShoppingCart, FaHeart, FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className="left-menu">
                <nav className='social-icons'>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaInstagramSquare /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </nav>
                <nav className='nav-menu menu1'>
                    <ul>
                        <li>Elements</li>
                        <li>Our shop</li>
                        <li>About us</li>
                    </ul>
                </nav>
            </div>

            <div className="logo">
                <div className="tile">Marseille</div>
                <div className="name">XSTORE THEME</div>
            </div>

            <div className="right-menu">
                <nav className="nav-menu menu2">
                    <ul>
                        <li>Contacts</li>
                        <li>Search</li>
                        <li>Sign In</li>
                    </ul>
                </nav>
                <nav className="social-icons2">
                    <ul>
                        <li><TfiReload /></li>
                        <li><FaHeart /></li>
                        <li><FaShoppingCart /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
