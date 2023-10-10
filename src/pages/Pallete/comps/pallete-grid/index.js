import React from "react";

// import { Container } from './styles';

import "./styles.css";
import useController from "./controller";

const imgCountArray = Array.from(Array(12).keys());

function PalleteGrid() {
  const { imgSrc, onPalleteImgClick, onSelectedImgClick, selectedImgClasses } =
    useController();
  return (
    <div className="palleteWrapper">
      <div className="imgPalleteContainer">
        {imgCountArray.map((v, i) => (
          <img
            onClick={(e) => onPalleteImgClick(e.target)}
            key={i}
            src={`/assets/pallete/img${i + 1}.jpg`}
          ></img>
        ))}
      </div>
      <img
        onClick={onSelectedImgClick}
        className={selectedImgClasses}
        src={imgSrc}
      ></img>
    </div>
  );
}

export default PalleteGrid;
