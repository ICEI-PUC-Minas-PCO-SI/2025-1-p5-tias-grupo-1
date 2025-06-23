import React from 'react';
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
          <li>Início</li>
          <li>Impacto Social</li>
          <li>Segmentos</li>
          <li>Sobre Nós</li>
        </ul>
        <button className="btn-header">Área Administrativa</button>
      </nav>
    </header>
  );
}
