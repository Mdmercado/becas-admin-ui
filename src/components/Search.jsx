import React, { useState } from "react";
import swal from "sweetalert";
import "./Search.css";
import { Welcome } from "./Welcome";

const urlBase = "https://becas-api.herokuapp.com/api/preinscriptos/";
let nombrePersona;
let idPersona;
function Search() {
	
	const [values, setValues] = useState({
		name: "",
	});
	const [cartel, setCartel] = useState(false);

	const { name } = values;
	

	const handleChange = (e) => {
		const { value } = e.target;
		setValues({ name: value });
		setCartel(false);
	};

	const getNombre = (e) => {
		e.preventDefault();
		if (values.name === "") {
			swal({
				icon: "error",
				text: "Debe ingresar un DNI a buscar ",
				button: false,
				timer:3000,
			});
		} else {
			fetch(urlBase + values.name, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => showName(data))
				.catch((e) => {
					swal({
            text:`El DNI ${values.name} no se encuentra`,
            button: false,
            icon:"warning",
          })
				});
			setValues({
				name: "",
			});
		}
	};
	function showName(data) {
		const { NombreApellido, id } = data[0];
		nombrePersona = NombreApellido;
		idPersona = id;
		setCartel(true);
	}
	return (
		<div className="container">
			<form onSubmit={getNombre}>
				<div className="main">
					<input
						className="input"
						id="docInput"
						maxLength="8"
						value={name}
						onChange={handleChange}
						type="text"
						placeholder="INGRESE SU DNI.."
						autoComplete="off"
						name="nombre"
					/>
					<button type="submit" className="btn">
						Buscar
					</button>
				</div>
			</form>
			{cartel && <Welcome name={nombrePersona} id={idPersona}  />}
		</div>
	);
}

export { Search };
