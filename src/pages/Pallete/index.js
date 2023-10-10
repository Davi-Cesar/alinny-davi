import React from "react";

// import { Container } from './styles';

import "./styles.css";
import PalleteGrid from "./comps/pallete-grid";

function Pallete() {
  return (
    <section className="pallete">
      <h3>Inspirações</h3>
      <h5>Paleta de Cores</h5>

      <PalleteGrid></PalleteGrid>

      <div className="palleteFooter">
        <img src="/assets/pallete/img1.jpg"></img>

        <div className="palleteFooterWrapper">
          <h3>Paleta de Cores</h3>
          <p>
            Para a nossa casa, escolhemos o preto, branco, cinza e o bambu para
            compor a nossa paleta de cores
          </p>

          <div className="palleteColorContainer">
            <img src="/assets/pallete/inox.jpg" className="palleteColor"></img>
            <img
              src="/assets/pallete/madeira.jpg"
              className="palleteColor"
            ></img>
            <div className="palleteColor" style={{ "--col": "#d9d9d9" }}></div>
            <div className="palleteColor" style={{ "--col": "#d9d9d9" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pallete;
