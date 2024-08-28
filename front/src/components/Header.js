// src/components/Header.js

import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar FontAwesome
import '../styles/Header.css';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const token = localStorage.getItem('USER');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const userName = token ? JSON.parse(localStorage.getItem('USER'))?.name : null;

  const handleLogout = () => {
    localStorage.removeItem('USER');
    history.push('/login');
  };

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
          {token ? (
            <div className='user-menu'>
              <button
                className='user-button'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <i className="fas fa-user"></i> {/* Ícone de usuário */}
                {`Olá, ${userName}`}
              </button>
              {isDropdownOpen && (
                <div className='dropdown-menu'>
                  <button onClick={handleLogout} className='dropdown-item'>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className={location.pathname === '/login' ? 'active-link' : 'default-link'}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
