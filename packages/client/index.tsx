import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App/App"
import "./src/Scss/style.scss"

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(<App/>)
