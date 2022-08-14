import React, { useState, useEffect } from "react";

//create your first component
const Semaforo = () => {
  const [color, setColor] = useState("");
  const [encendido, setEncendido] = useState(false);
  const colores = ["rojo", "amarillo", "verde"];
  const [intervalo, setIntervalo] = useState(0);
  const [intervalo2, setIntervalo2] = useState(0);

  const cambiarLuzRoja = () => {
    setColor("rojo");
  };

  const cambiarLuzAmarilla = () => {
    setColor("amarillo");
  };

  const cambiarLuzVerde = () => {
    setColor("verde");
  };
  //funcion que para el setInterval con el numero de intervalo
  const stopInterval = () => {
    clearInterval(intervalo);
    setIntervalo(null);
  };

  //funcion que me implementa la clase brilla en cualquier luz
  const setBrillo = (colorLuz) => {
    let clase = "";
    if (color === colorLuz) clase += " brilla";
    return clase;
  };
  /*
	//timeouts para que vayan en orden
	const timeout3 = ()=>{
		setColor("verde");
		setTimeout(console.log("estoy en el ultimo timeout"),1000)
	} 

	const timeout2 = ()=>{
		setColor("amarillo");
		console.log("entro al segundo timeout");
		let timeOut2 = setTimeout(timeout3(),1000);
		console.log("salgo del segundo timeout");
		clearTimeout(timeOut2);
	}

	const enOrden = ()=>{
		setColor("rojo");
		console.log("entro al primer timeout");
		let timeOut1 = setTimeout(timeout2(),1000);
		console.log("salgo del primer timeout");
		clearTimeout(timeOut1);
	}
*/
  /*	const lucesParty = () =>{
		setInterval(() =>{
			let aleatorio = colores[Math.floor(Math.random()* colores.length)]
			//enOrden();
			console.log(aleatorio)
			setColor(aleatorio)
		},1000)
	}*/

  const encenderSemaforo = () => {
    if (!encendido) {
      setEncendido(true);
      //lucesParty();
    } else setEncendido(false);
  };

  const functionIntervalo2 = () => {
    if (!intervalo2) {
      let index = 0;
      let newIntervalo2 = setInterval(() => {
        console.log("dentro de intervalo2");
        if (index < colores.length) {
          setColor(colores[index]);
          index++;
        }
      }, 1000);
      setIntervalo2(newIntervalo2);
    }
	else{
		console.log(intervalo2);
		clearInterval(intervalo2);
		setIntervalo2(null);
	}
  };

  useEffect(() => {
    if (!intervalo) {
      console.log("dentro de intervalo1");
      let newIntervalo = setInterval(() => {
        functionIntervalo2();
        //let aleatorio = colores[Math.floor(Math.random()* colores.length)];
        //enOrden();
        //console.log(aleatorio);
        //setColor(aleatorio);
      }, 3000);
      setIntervalo(newIntervalo);
    } else stopInterval();
  }, [encendido]);

  return (
    <div className="container">
      <div className="caja d-flex mt-5">
        <div
          className={"rojo" + setBrillo("rojo")}
          onClick={cambiarLuzRoja}
        ></div>
        <div
          className={"amarillo" + setBrillo("amarillo")}
          onClick={cambiarLuzAmarilla}
        ></div>
        <div
          className={"verde" + setBrillo("verde")}
          onClick={cambiarLuzVerde}
        ></div>
      </div>
      <button className="btn btn-primary my-5" onClick={encenderSemaforo}>
        Encender o Apagar el Semaforo
      </button>
    </div>
  );
};

export default Semaforo;
