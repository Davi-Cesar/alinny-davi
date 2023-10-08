import React, { useState } from "react";
import "./hamburger.css";
import Navbar from "../Navbar/navbar";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={ToggleStatus}>
        <div
          className={isOpen ? "burguer burguer1-open" : "burguer burguer1"}
        />
        <div
          className={isOpen ? "burguer burguer2-open" : "burguer burguer2"}
        />
        <div
          className={isOpen ? "burguer burguer3-open" : "burguer burguer3"}
        />
      </div>

      <div className={isOpen ? "menu-bg bgOpen" : "menu-bg"}>
        <Navbar isOpen={isOpen} />
      </div>
    </>
  );
}
