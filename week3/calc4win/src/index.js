import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CalcProvider } from "./CalcContext";

ReactDOM.render(
  <React.StrictMode>
    <CalcProvider>
      <App />
    </CalcProvider>
  </React.StrictMode>,
  document.getElementById("root")
);