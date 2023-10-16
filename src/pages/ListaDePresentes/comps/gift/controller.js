function useController({ presente }) {
  const handleButtonClick = () => {
    if (presente.reservado) return;

    const url =
      `https://api.whatsapp.com/send?phone=5584996803260&text=Olá, Gostaria de reservar esse presente para o casamento. 
    ${presente.descricao}, Código: ` + presente.id;
    window.open(url, "_blank");
  };
  return { handleButtonClick };
}

export default useController;
