import React, { useState } from "react";
import "./Search.css";

const urlBase = "https://becas-api.herokuapp.com/api/preinscriptos/";
function Search() {
  const [values, setValues] = useState({
    name: "",
  });
  const { name } = values;

  const handleChange = (e) => {
    const { value } = e.target;
    setValues({ name: value });
  };

  const getNombre = () => {
    fetch(urlBase + values.name, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data[0]))
      .catch((e) => {
        alert("Dni ingresado no se encuentra");
      });
  };
  return (
    <div className="main">
      <input
        className="input"
        id="docInput"
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Ej. DNI 43179753.."
        autoComplete="off"
      />
      <button onClick={getNombre} className="btn">
        Buscar
      </button>
      {/* <Welcome nombre={nombrePersona} /> */}
    </div>
  );
}

export { Search };
