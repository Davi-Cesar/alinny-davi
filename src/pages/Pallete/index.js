import React from "react";

// import { Container } from './styles';

import "./styles.css";
import PalleteGrid from "./comps/pallete-grid";

function Pallete() {
  return (
    <section className="pallete">
      <h3>Inspirações</h3>
      <h5>Paleta de Cores</h5>

      <div>
        <PalleteGrid></PalleteGrid>

        <div className="palleteFooter">
          <img src="/assets/pallete/img1.jpg"></img>

          <div className="palleteFooterWrapper">
            <h3>Paleta de Cores</h3>
            <p>
              Para a nossa casa, escolhemos o preto, branco, cinza e o bambu
              para compor a nossa paleta de cores
            </p>

            <div className="palleteColorContainer">
              <img
                src="/assets/pallete/inox.jpg"
                className="palleteColor"
              ></img>
              <img
                src="/assets/pallete/madeira.jpg"
                className="palleteColor"
              ></img>
              <div
                className="palleteColor"
                style={{ "--col": "#323232" }}
              ></div>

              <div
                className="palleteColor"
                style={{ "--col": "#525252" }}
              ></div>
            </div>
            <h3>Escolhendo o melhor presente</h3>
            <p>
              Após escolher o seu presente, nos avise para que ele seja removido
              do site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pallete;
