import React from "react";

function Title() {
  const año_title = new Date().getFullYear();
  return (
    <div>
      <h1>Bienvenido al sitema de preinscripcion de becas {año_title + 1}</h1>
    </div>
  );
}

export { Title };
