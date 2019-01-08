import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import logger from "./services/logService";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

logger.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
