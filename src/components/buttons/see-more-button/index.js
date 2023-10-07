import React from "react";
import "./style.css";

function SeeMoreButton({ onClick }) {
  return (
    <button className="button  default see-more-button" onClick={onClick}>
      <p>Carregar Mais</p>
    </button>
  );
}

export default SeeMoreButton;
