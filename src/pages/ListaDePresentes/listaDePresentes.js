import React, { useMemo, useState } from "react";
import "./listaDePresentes.css";
import Gift from "./comps/gift";
import SeeMoreButton from "../../components/buttons/see-more-button";
import useController from "./controller";

export default function ListaDePresentes() {
  const { onSeeMoreHandle, showCount, slicedGifts, totalCount } =
    useController();

  const showButton = useMemo(() => showCount >= totalCount, [showCount]);

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

          <p className="page-info">
            Mostrando {showCount} de
            {totalCount} items
          </p>

          {!showButton && (
            <div className="bt">
              <SeeMoreButton onClick={onSeeMoreHandle}></SeeMoreButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
