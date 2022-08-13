import React, { useState, useEffect } from "react";

const [color, setColor] = useState("rojo");

//create your first component
const Semaforo = () => {
	return (
		<div className="container">
			<div className="caja d-flex">
				<div className={"rojo"+((color === "rojo") ? " brilla" : "")}></div>
				<div className="amarillo"></div>
				<div className="verde"></div>
			</div>
		</div>
	);
};

export default Semaforo;
