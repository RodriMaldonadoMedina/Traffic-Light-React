import React, { useState, useEffect } from "react";

const [brilla, setBrilla] = useState(false);
const [color, setColor] = useState("red");

//useEffect


//create your first component
const Semaforo = () => {
	return (
		<div className="container">
			<div className="caja d-flex">
				<div className="rojo brilla"></div>
				<div className="amarillo"></div>
				<div className="verde"></div>
			</div>
		</div>
	);
};

export default Semaforo;
