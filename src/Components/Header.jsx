
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">Trombetta</Link>
      <Link to="/about-contact" className='header-title'>About/Contact</Link>
    </header>
  );
};

export default Header;
