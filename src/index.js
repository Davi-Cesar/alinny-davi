import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/header";
import App from "./App"; // Substitua 'App' pelo nome do seu componente principal

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
