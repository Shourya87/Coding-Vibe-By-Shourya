import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <p>
                &copy; 2024 ShopNest. All rights reserverd.
            </p>
            <ul className="footer-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>
    </footer>
  )
}
