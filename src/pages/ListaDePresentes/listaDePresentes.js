import React, { useState } from "react";
import "./listaDePresentes.css";
export default function ListaDePresentes() {
  const [presentes] = useState([
    {
      id: 1,
      img: "/assets/images/Fritadeira_5_Litros_1400W.jpg",
      descricao: "Fritadeira 5 Litros 1400W",
      valor: 250.0,
    },
    {
      id: 2,
      img: "/assets/images/Fritadeira_5_Litros_1400W.jpg",
      descricao: "Fritadeira 5 Litros 1400W",
      valor: 250.0,
    },
    {
      id: 3,
      img: "/assets/images/Fritadeira_5_Litros_1400W.jpg",
      descricao: "Fritadeira 5 Litros 1400W",
      valor: 250.0,
    },
    {
      id: 4,
      img: "/assets/images/Fritadeira_5_Litros_1400W.jpg",
      descricao: "Fritadeira 5 Litros 1400W",
      valor: 250.0,
    },
  ]);

  return (
    <>
      <div className="container">
        <center>
          <h1>Lista de Presentes</h1>
        </center>
        <div className="containerPresente">
          <ul>
            {presentes.map((presente) => (
              <li key={presente.id} className="item">
                <center>
                  <img src={presente.img} alt="" />
                  <p>{presente.descricao}</p>

                  <i>valor aproximado:</i>

                  <h4>R$ {presente.valor},00</h4>
                  <button className="button default">Presentear</button>
                </center>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
