import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* GLOBAL VARIABLES */

window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
