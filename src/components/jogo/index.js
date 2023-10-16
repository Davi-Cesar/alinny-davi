import React from "react";

import "./styles.css";
import { useController } from "./controller";

function Jogo() {
  const { handleAttackButton } = useController();

  return (
    <div>
      <button onClick={handleAttackButton}></button>
    </div>
  );
}

export default Jogo;
