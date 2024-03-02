// src/components/Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className='main-links'>
          <Link to="/" className={location.pathname === '/' ? 'disabled-link' : 'active-link'}>
            Home
          </Link>
          <Link to="/megasena" className={location.pathname === '/megasena' ? 'active-link' : 'default-link'}>
            Mega Sena
          </Link>
          <Link to="/lotofacil" className={location.pathname === '/lotofacil' ? 'active-link' : 'default-link'}>
            Lotofácil
          </Link>
          <Link to="/quina" className={location.pathname === '/quina' ? 'active-link' : 'default-link'}>
            Quina
          </Link>
        </div>
        <div className='login-link'>
          <Link to="/login" className={location.pathname === '/login' ? 'active-link' : 'default-link'}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
