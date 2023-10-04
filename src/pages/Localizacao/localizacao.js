import "./localizacao.css";
/* eslint-disable jsx-a11y/iframe-has-title */
export default function localizacao() {
  return (
    <>
      <div className="container-localizacao">
        <center>
          <h1>CERIMÔNIA</h1>
        </center>
        <p>
          Gostaríamos muito de contar com a presença de todos vocês no momento
          em que nossa união será abençoada diante de Deus! A cerimônia será
          rápida e tentaremos ser extremamente pontuais. Contamos com vocês! Dia
          15 de dezembro de 2023, às 16h. R. Joaquim Araújo Filho - Lagoa Nova,
          Natal - RN, 59075-710
        </p>
        <div className="mapbox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.235152355905!2d-35.223812525739184!3d-5.822427157406706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255a950cc8693%3A0x80161c9323e7509a!2sGARDEN%20Espa%C3%A7o%20para%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1696179986721!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
