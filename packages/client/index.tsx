import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App"
import "./src/Scss/style.scss"
import ping from "./src/utils/ping"

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)
ping()
