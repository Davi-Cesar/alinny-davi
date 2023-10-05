import "./header.css";
import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {}, []);

  const headerScrolled = () => {
    setIsScrolled(window.scrolY);
  };

  return (
    <header
      id="myHeader"
      className={headerScrolled > 100 ? "headerScrolled" : "header"}
    >
      <img src="/logo_vetorizada.svg" className="logo" alt="gif" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#lista-de-presentes">Lista de presentes</a>
          </li>
          <li>
            <a href="#localizacao">Cerimônia</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
