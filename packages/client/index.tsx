import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App"
import "./src/Scss/style.scss"

ReactDOM.hydrateRoot(document.querySelector("#root") as HTMLElement, <App/>)
