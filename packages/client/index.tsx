import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App/App"
import "./style.scss"

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(<App/>)
