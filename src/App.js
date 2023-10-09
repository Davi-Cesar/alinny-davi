import "./App.css";
import Cerimonia from "./pages/Cerimonia/cerimonia";
import Fotos from "./pages/Fotos/fotos";
import ListaDePresentes from "./pages/ListaDePresentes/listaDePresentes";

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
        <Fotos />
        <ListaDePresentes />
        <Cerimonia />
      </div>
    </>
  );
}

export default App;
