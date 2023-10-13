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
              <a href="/#home">Home</a>
              <House />
            </li>
            <li className="icon">
              <a href="/#fotos">Fotos</a>
              <Aperture />
            </li>
            <li className="icon">
              <a href="/#paleta">Paleta</a>
              <Palette />
            </li>
            <li className="icon">
              <a href="/#presentes">Lista de presentes</a>
              <Gift />
            </li>
            <li className="icon">
              <a href="/#cerimonia">Cerimônia</a>
              <MapPinLine />
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </>
  );
}
