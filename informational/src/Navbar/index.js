import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Images/logo.png" alt="Edukeri" />
      </div>
      <div className='Links'>
        <ul className={`links ${isOpen ? 'show' : ''}`}>
          <li>Home</li>
          <li>About us</li>
          <li>Our Services</li>
          <li>Team</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;