import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  color: black;
  height: 60px;
  z-index: 1001;
  border-radius: 10%;

  .menu-icon {
    display: none;
    font-size: 1.8rem; 
    cursor: pointer;
    z-index: 1002;
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${({ isOpen }) => (isOpen ? 'white' : 'black')};
    transition: color 0.3s ease-in-out;
  }

  @media (max-width: 900px) {
    .menu-icon {
      display: block;
    }

    ul {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      top: 0;
      position: fixed;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
      opacity: 0.94;
      list-style: none;
      padding: 0;
      margin: 0;
      z-index: 1000;
      border: solid 1px;
      align-items: center;
      font-size: 20px;

      li {
        padding: 3.5rem;
        border-bottom: 1px solid #444;
        text-align: center;
      }
    }
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 1rem;
  }

  @media (max-width: 900px) {
    display: none;
    flex-direction: column;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer isOpen={isOpen} className="navbar">
      <div className='navbar-logo'>
        <img src="/Images/logo.png" alt='Edukeri'></img>
      </div>
      <div>
      <MenuItems className="links">
        <li>Home</li>
        <li>About us</li>
        <li>Our Services</li>
        <li>Team</li>
        <li>Contacts</li>
      </MenuItems>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </NavbarContainer>
  );


  
};

