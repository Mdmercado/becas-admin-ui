import React from "react";
import swal from "sweetalert";
import "./Welcome.css";
function Welcome({ name, id }) {
  const año = new Date().getFullYear();

  const inscription = () => {
    swal({
      title: "Confirmacion preinscripción a Beca",
      text: `¿Desea preinscribir a ${name}?`,
      icon: "info",
      buttons: true,
      closeOnClickOutside: false,
    }).then((exito) => {
      if (exito) {
        swal({
          text:
            "Completado! Ahora te encuentras preinscripto a becas " + (año + 1),
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div className="welcome">
      <h1 className="welcome-title">¡Te damos la Bienvenida {name}!</h1>
      <div className="welcome-btn">
        <button onClick={inscription}>
          {"Preinscripcion a beca " + (año + 1)}{" "}
        </button>
      </div>
    </div>
  );
}

export { Welcome };
