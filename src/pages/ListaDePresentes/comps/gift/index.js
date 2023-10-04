import React from "react";

// import { Container } from './styles';

import "./style.css";

function Gift(presente) {
  return (
    <li key={presente.id} className="item">
      <img src={presente.img} alt="" />
      <p>{presente.descricao}</p>

      <i>valor aproximado:</i>

      <h4>R$ {presente.valor},00</h4>
      <button className="button default">Presentear</button>
    </li>
  );
}

export default Gift;
