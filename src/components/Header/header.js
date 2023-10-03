import "./header.css";
import React from "react";

function Header() {
  return (
    <header className="header">
      <img src="/logo_vetorizada.svg" className="logo" alt="gif" />

      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#lista-de-presentes">Lista de Presentes</a>
          </li>
          <li>
            <a href="#localizacao">Localização</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
