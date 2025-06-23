import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src="/image.png" alt="Logo Projeto Mucuri" />
          <p><strong>Projeto Mucuri</strong></p>
          <p>O Projeto Mucuri que nasceu para transformar a vida das pessoas.</p>
          <div className="social-icons">
            <a href="#"><i className="fa-solid fa-location-dot"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/5573999885577" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

        </div>
        <div className="footer-links">
          <div>
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/">Sobre</a></li>
              <li><a href="/">Serviços</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>
          <div>
            <h4>Segmentos</h4>
            <ul>
              <li>Aprendizado</li>
              <li>Primeiro Emprego</li>
              <li>Recolocação</li>
              <li>Bem-Estar</li>
            </ul>
          </div>
          <div>
            <h4>Sobre o Projeto</h4>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Contato</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©copyright 2025 Projeto Mucuri</p>
      </div>
    </footer>
  );
}
