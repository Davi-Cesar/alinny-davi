import React, { useMemo, useState } from "react";
import "./listaDePresentes.css";
import Gift from "./comps/gift";
import SeeMoreButton from "../../components/buttons/see-more-button";
import useController from "./controller";

export default function ListaDePresentes() {
  const { onSeeMoreHandle, showCount, slicedGifts } = useController();

  return (
    <>
      <div className="container">
        <center>
          <h1>Lista de Presentes</h1>
        </center>
        <div className="containerPresente">
          <ul>
            {slicedGifts.map((presente) => (
              <Gift key={presente.id} {...presente}></Gift>
            ))}
          </ul>

          <SeeMoreButton onClick={onSeeMoreHandle}></SeeMoreButton>
        </div>
      </div>
    </>
  );
}
