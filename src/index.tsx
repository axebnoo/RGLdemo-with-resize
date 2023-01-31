import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import "./resizable-style.css";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
