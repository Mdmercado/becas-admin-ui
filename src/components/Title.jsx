import React from "react";
import "./Title.css";

function Title() {
  const año_title = new Date().getFullYear();
  return (
    <div className="header">
      <h1>
        ¡ Bienvenido al sitema de preinscripcion de becas {año_title + 1} !
      </h1>
    </div>
  );
}

export { Title };