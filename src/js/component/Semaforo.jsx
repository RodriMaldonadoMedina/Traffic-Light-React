import React, { useState, useEffect } from "react";

//create your first component
const Semaforo = () => {
	const [color, setColor] = useState("");

	useEffect(()=>{
		setColor("rojo")
	},[])

	const cambiarLuzRoja = ()=>{
		setColor("rojo")
	}

	const cambiarLuzAmarilla = ()=>{
		setColor("amarillo")
	}

	const cambiarLuzVerde = ()=>{
		setColor("verde")
	}

	return (
		<div className="container">
			<div className="caja d-flex">
				<div className={"rojo"+((color === "rojo") ? " brilla" : "")} onClick={cambiarLuzRoja}></div>
				<div className={"amarillo"+((color === "amarillo") ? " brilla" : "")} onClick={cambiarLuzAmarilla}></div>
				<div className={"verde"+((color === "verde") ? " brilla" : "")} onClick={cambiarLuzVerde}></div>
			</div>
		</div>
	);
};

export default Semaforo;
