import React from "react";
import "./Title.css";

function Title() {
  const año_title = new Date().getFullYear();
  return (
    <div className="header">
      <h1>
        ¡Bienvenido al sistema de preinscripción de becas {año_title + 1}!
      </h1>
    </div>
  );
}

export { Title };
