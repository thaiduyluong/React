import React from 'react';
import {
    FaUser,
    FaShoppingCart,
    FaHeart,
    FaFacebookF,
    FaInstagramSquare
} from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import './Header.scss';
import { Link } from 'react-router';

function Header() {
    return (
        <header className='header'>
            <div className='menu'>
                <div className='menu-section'>
                    <ul>
                        <Link to = "/categoryProduct" className='menu-link'><li>Product</li></Link>
                        <li>Brand</li>
                        <li>Collection</li>
                        <li>Promotion</li>
                        <li>Aboutus</li>
                    </ul>
                </div>
                <div className='search'>
                    <input
                        type='search'
                        pattern='Tìm kiếm'
                        placeholder='Tìm kiếm'
                    />
                    <CiSearch />
                </div>
                <div className='menu-icons'>
                    <ul>
                        <li>
                            <FaHeart />
                        </li>
                        <li>
                            <FaShoppingCart />
                        </li>
                        <li>
                            <FaUser />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
