import React from "react";
import { NavLink as Link } from 'react-router-dom';
import "./Navbar.css";
import logoImage from '../../assets/images/logo.jpg'

export default function Navbar() {
  return (
    <>
    
    <div className="navbar sticky" >
    <div className="nav">
    <Link to='/'> <img className="logo" src={logoImage} alt='aboutus images' /></Link>
      </div>
      <div className="nav">
       <ul>
       <li> <Link to='/'>Home</Link></li>
       <li><Link to='/about'>
          About Us
        </Link></li>
       <li><Link to='/menu'>
          Menu
        </Link></li>
       <li><Link to='/reservation'>
          Reservation
        </Link></li>
       <li><Link to='/review'>
          Review
        </Link></li>
       <li><Link to='/contact'>
          Contact Us
        </Link></li>      
        
</ul>
      </div>
    </div>
    </>
  );
}