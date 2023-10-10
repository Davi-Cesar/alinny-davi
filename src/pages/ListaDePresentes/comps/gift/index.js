import React from "react";

// import { Container } from './styles';

import "./style.css";
import useController from "./controller";

function Gift(presente) {
  const { handleButtonClick } = useController({ presente });

  return (
    <li key={presente.id} className="item">
      <div className={presente.reservado ? "reserved" : ""}></div>
      <img src={presente.img} alt="" />

      <p>{presente.descricao}</p>

      <h4>R$ {presente.valor},00</h4>
      <button
        disabled={presente.reservado}
        onClick={handleButtonClick}
        className="button default"
      >
        {presente.reservado ? "Reservado!" : "Presentear"}
      </button>
    </li>
  );
}

export default Gift;
