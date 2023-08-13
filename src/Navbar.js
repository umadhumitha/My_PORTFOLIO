import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/learning">Learning</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;