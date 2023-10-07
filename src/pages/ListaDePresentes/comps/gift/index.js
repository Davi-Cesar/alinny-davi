import React from "react";

// import { Container } from './styles';

import "./style.css";
import useController from "./controller";

function Gift(presente) {
  const { handleButtonClick } = useController({ presente });

  return (
    <li key={presente.id} className="item">
      <img src={presente.img} alt="" />

      <p>{presente.descricao}</p>

      <h4>R$ {presente.valor},00</h4>
      <button onClick={handleButtonClick} className="button default">
        Presentear
      </button>
    </li>
  );
}

export default Gift;
