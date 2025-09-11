import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";           // 👈 importar el DEFAULT, no { AppWrapper }
import "./styles/custom.css";
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)