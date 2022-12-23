import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fontawesome.ts";
import "@/assets/scss/pe-icon-7-stroke.css";
import "./app.scss";

import "virtual:windi.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
