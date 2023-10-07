import React from "react";

// import { Container } from './styles';

function useController({ presente }) {
  const handleButtonClick = () => {
    const url =
      `https://api.whatsapp.com/send?phone=5584994199621&text=Olá, gostaria de reservar esse presente para o noivado. 
    ${presente.descricao}, Código: ` + presente.id;
    window.open(url, "_blank");
  };
  return { handleButtonClick };
}

export default useController;
