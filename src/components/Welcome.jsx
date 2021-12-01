import React from "react";
import swal from "sweetalert";
import "./Welcome.css";




function Welcome({ name, id}) {
	
	const urlBase = "https://becas-api.herokuapp.com/api/preinscriptos/";
	const año = new Date().getFullYear();
	

	const inscription = () => {
		swal({
			title: "Confirmacion preinscripción a Beca",
			text: `¿Desea preinscribir a ${name}?`,
			icon: "info",
			buttons: ['Cancelar', 'Confirmar'],
			closeOnClickOutside: false,
			
		}).then((exito) => {
			if (exito) {
				fetch(urlBase, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						idAspirante: id,
						anio: año + 1,
					}),
				})
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((e) => console.log(e));
				swal({
					text:
						"Completado! Ahora te encuentras preinscripto a becas " + (año + 1),
					icon: "success",
					timer: 3000,
					button: false,
				});
				
			} else {
				swal("", "Preinscripción a beca cancelada", "error", {
					timer: 3000,
					button: false,
				});
			}
		});
	};

	return (
		<div className="welcome">
			<h2 className="welcome-title">¡Te damos la Bienvenida {name}!</h2>
			<div className="welcome-btn">
				<button onClick={inscription}>
					{"Preinscripcion a beca " + (año + 1)}{" "}
				</button>
			</div>
		</div>
	);
}

export { Welcome };
