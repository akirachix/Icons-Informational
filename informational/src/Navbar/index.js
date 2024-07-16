import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Images/logo.png" alt="Edukeri" />
      </div>
      <div className='Links'>
        <ul className={`links ${isOpen ? 'show' : ''}`}>
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href='#aboutpage' onClick={handleLinkClick}>About us</a></li>
          <li><a href="#" onClick={handleLinkClick}>Our Services</a></li>
          <li><a href="#" onClick={handleLinkClick}>Team</a></li>
          <li><a href="#" onClick={handleLinkClick}>Contacts</a></li>
        </ul>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;