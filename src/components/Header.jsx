import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaretLeft, House } from '@phosphor-icons/react';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="app-header">
      {!isHome && (
        <button className="icon-btn back-btn" onClick={() => navigate(-1)} aria-label="Atrás">
          <CaretLeft size={24} weight="bold" />
        </button>
      )}
      <div className="header-content">
        <div className="french-flag">
          <div className="stripe blue"></div>
          <div className="stripe white"></div>
          <div className="stripe red"></div>
        </div>
        <h1>Guía de Francia</h1>
      </div>
      {!isHome && (
        <button className="icon-btn home-btn" onClick={() => navigate('/')} aria-label="Inicio">
          <House size={24} weight="fill" />
        </button>
      )}
    </header>
  );
}
