import "./App.css";

import ListaDePresentes from "./pages/ListaDePresentes/listaDePresentes";
import Localizacao from "./pages/Localizacao/localizacao";

function App() {
  return (
    <>
      <div id="#home" className="home-container">
        <div
          className="home-content"
          style={{ backgroundImage: `url("./pre.jpg")` }}
        >
          <div className="home-background">
            <h1>Alinny & Davi</h1>
            <p>15 de dezembro de 2023</p>
          </div>
        </div>

        <ListaDePresentes />
        <Localizacao />
      </div>
    </>
  );
}

export default App;
