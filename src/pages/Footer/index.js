import React from "react";
import { InstagramLogo } from "@phosphor-icons/react";
import "./styles.css";

function Footer() {
  return (
    <footer className="sitefooter">
      <div className="footer-logo">
        <img src="/logo_vetorizada.svg" />
        <p>
          Alinny <br />e Davi
        </p>
      </div>

      <div className="devs">
        <p>Feito por:</p>
        <a href="https://github.com/Davi-Cesar" target="_blank">
          Davi Cesar
        </a>
        <a href="https://marlonsecundo.github.io/portfolio/" target="_blank">
          Marlon Secundo
        </a>
      </div>
      <div className="photographer">
        {/* <h5>Fotográfo</h5> */}

        <a
          href="https://instagram.com/robertofbezerra?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <InstagramLogo className="instaIcon" />
          <p>@robertofbezerra</p>
        </a>
      </div>
      <div className="year">2023</div>
    </footer>
  );
}

export default Footer;
