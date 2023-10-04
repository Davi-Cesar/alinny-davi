import React from "react";
import "./style.css";

function SeeMoreButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img></img>
      <p>Carregar Mais</p>
    </button>
  );
}

export default SeeMoreButton;
