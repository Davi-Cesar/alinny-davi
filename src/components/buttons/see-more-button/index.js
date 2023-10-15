import React from "react";
import "./style.css";
import { CaretDown, IconContext } from "@phosphor-icons/react";

function SeeMoreButton({ onClick }) {
  const caretDownStyle = {
    marginTop: "8px", // Ou qualquer valor de margem desejado
  };
  return (
    <button className="button  default see-more-button" onClick={onClick}>
      <p>
        Mostrar mais <CaretDown size={18} weight="bold" />
      </p>
    </button>
  );
}

export default SeeMoreButton;
