import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/SCG-page/logo.webp"
          className="logo"
          alt="logo"
        />
        <div>
          <p className="pc">Lunes a Domingo</p>
          <p className="pc">4pm a 11pm</p>
        </div>
      </div>

      <div className="nav">
        <Link
          to="/SCG-page/"
          className="nav-link"
        >
          Inicio
        </Link>

        <a
          href="https://wa.link/rb5j56"
          className="nav-link"
        >
          Contacto
        </a>

        <a
          href="#"
          className="nav-link"
        >
          <img
            className="icono"
            src="/SCG-page/facebook.png"
            alt=""
          />
        </a>

        <a
          href="https://www.instagram.com/saborcurramberogrill/"
          className="nav-link"
        >
          <img
            className="icono"
            src="/SCG-page/instagram.png"
            alt=""
          />
          <p>@saborcurramberogrill</p>
        </a>
      </div>
      <div></div>
    </header>
  );
}
