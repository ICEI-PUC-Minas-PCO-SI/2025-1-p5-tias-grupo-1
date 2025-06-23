import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/image.png" alt="Projeto Mucuri" />
        <span>Projeto Mucuri</span>
      </div>

      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/impacto-social">Impacto Social</Link></li>
          <li><Link to="/segmentos">Segmentos</Link></li>
          <li><Link to="/sobre-nos">Sobre Nós</Link></li>
        </ul>
        <button className="btn-header">Área Administrativa</button>
      </nav>
    </header>
  );
}
