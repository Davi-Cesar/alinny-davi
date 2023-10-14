import "./App.css";
import Cerimonia from "./pages/Cerimonia/cerimonia";
import Footer from "./pages/Footer";
import Fotos from "./pages/Fotos/fotos";
import ListaDePresentes from "./pages/ListaDePresentes/listaDePresentes";
import Pallete from "./pages/Pallete";
function App() {
  return (
    <>
      <div id="home" className="home-container">
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

        <Pallete></Pallete>
        <ListaDePresentes />
        <Cerimonia />

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
