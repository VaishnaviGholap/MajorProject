
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src='./Images/ninjalogo2.gif' alt="NinjaCourier Logo" />
            <span className="logo-text" style={{fontFamily:'cursive',color:'black'}}>NinjaCourier</span>
          </div>
           
          <div className='nav-links'>
            <li><Link to="/customer-home">Home</Link></li>
            <li><Link to="/distance">Place Order</Link></li>
            <li><Link to="/track-order">Track order</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </div>
          
          <div className='logout'>
            <Link to="/role-select">LogOut</Link>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;


