import React from "react";
import "./navbar.css";
import {
  Aperture,
  Gift,
  House,
  IconContext,
  MapPinLine,
  Palette,
} from "@phosphor-icons/react";

export default function Navbar({ isOpen }) {
  return (
    <>
      <nav className={isOpen ? "open" : ""}>
        <ul className="menu">
          <IconContext.Provider
            value={{
              color: "black",
              size: 32,
              weight: "regular",
              mirrored: false,
              display: isOpen ? "" : "none",
              transition: "translateX 2s",
              cursor: "pointer",
            }}
          >
            <li className="icon">
              <a href="/#home">
                <p>Home</p>
                <House />
              </a>
            </li>
            <li className="icon">
              <a href="/#fotos">
                <p>Fotos</p>
                <Aperture href="/#foto" />
              </a>
            </li>
            <li className="icon">
              <a href="/#paleta">
                <p>Paleta</p>
                <Palette href="/#paleta" />
              </a>
            </li>
            <li className="icon">
              <a href="/#presentes">
                <p>Lista de presentes</p>
                <Gift href="/#presentes" />
              </a>
            </li>
            <li className="icon">
              <a href="/#cerimonia">
                <p>Cerimônia</p>
                <MapPinLine href="/#cerimonia" />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </>
  );
}
