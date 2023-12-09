import React from "react";

import "./styles.css";

function Message() {
  return (
    <section className="message">
      <div className="message-container">
        <div>
          <p
            className="messageHead"
            style={{ fontSize: "1.5rem", marginTop: "0rem" }}
          >
            Olá familiares e amigos, sejam bem-vindos ao nosso site de
            casamento!
          </p>
          <p style={{ lineHeight: "2rem", textAlign: "justify" }}>
            Nele vocês vão encontraram nossas fotos, descrição sobre o local da
            cerimônia, paleta de cores e lista de presentes.<br></br>Sobre nossa
            lista de presentes quando selecionado a opção presentear será
            enviando um mensagem para nosso WhatsApp informando que você irá nos
            presentear com determinado item. <br></br>
            <br></br> Os presentes deverão ser entregues até no máximo 3 dias
            antes do evento.
          </p>

          <div className="message-footer">
            <p style={{ marginTop: "4rem" }}>
              <b>Endereço: </b>
              Av. Euzébio Rocha nº 13 - Cidade da Esperança - Natal/RN <br></br>
              <b>CEP: </b>
              59070-660
              <br></br>
              <b>PIX:</b> (84) 99419-9621
            </p>
          </div>
        </div>
        <div className="messageImg">
          <img src="./pw1.jpg"></img>
        </div>
      </div>
    </section>
  );
}

export default Message;
