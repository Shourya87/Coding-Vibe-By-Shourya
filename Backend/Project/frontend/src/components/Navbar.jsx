import React from 'react'
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import { AuthContext } from '../context/auth.context';


export default function Navbar() {
  return (
    <nav className="navbar">
        <div className='navbar-brand'>
            <Link to="/">
            <img src='/logo.png' alt='ShopNest Logo' className="navbar-logo"/>
                ShopNest
            </Link>
            <ul className='navbar-links'>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    </nav>
  )
}
