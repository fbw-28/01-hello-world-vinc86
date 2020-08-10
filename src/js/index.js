import React from "react";
import { render } from "react-dom";
import "../styles/main.css";
const root = document.getElementById("root");

function Container() {
  return <h1>Hello World!</h1>;
}

render(<Container />, root);
