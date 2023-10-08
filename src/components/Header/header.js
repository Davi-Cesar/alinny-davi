import "./header.css";
import React, { useEffect, useState } from "react";
import Hamburger from "../Hamburger/hamburger";
import Navbar from "../Navbar/navbar";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="myHeader"
      className={isScrolled ? "header header-rolagem" : "header"}
    >
      <img src="/logo_vetorizada.svg" className="logo" alt="gif" />

      <Hamburger />
      <Navbar />
    </header>
  );
}

export default Header;
