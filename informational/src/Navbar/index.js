import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Images/logo.png" alt="Edukeri" />
      </div>
      <div className="Links">
        <ul className={`links ${isOpen ? 'show' : ''}`}>
          <li><a href="#home" onClick={(event) => handleLinkClick(event, 'home')}>Home</a></li>
          <li><a href="#aboutpage" onClick={(event) => handleLinkClick(event, 'aboutpage')}>About us</a></li>
          <li><a href="#services" onClick={(event) => handleLinkClick(event, 'services')}>Services</a></li>
          <li><a href="#team" onClick={(event) => handleLinkClick(event, 'team')}>Team</a></li>
          <li><a href="#contact" onClick={(event) => handleLinkClick(event, 'contact')}>Contacts</a></li>
        </ul>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
export default Navbar