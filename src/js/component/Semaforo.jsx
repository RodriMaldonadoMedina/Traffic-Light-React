import React, { useState, useEffect } from "react";

//create your first component
const Semaforo = () => {
  
  const [color, setColor] = useState("");
  const [encendido, setEncendido] = useState(false);
  const [intervalo, setIntervalo] = useState(null);

  //aux la utilizo para que no se me dispare el useEffect al cargar la pagina
  const [aux, setAux] = useState(0);

  const [mostrarMorado, setMostrarMorado] = useState(false);

  //necesito el useState de colores porque si no, nunca se va a enterar de que se le agrego uno mas
  const [colores, setColores] = useState(["rojo","amarillo","verde"]);

  const cambiarLuzRoja = () => {
    if(color !== "rojo")
      setColor("rojo");
    else setColor("");
  };

  const cambiarLuzAmarilla = () => {
    if(color !== "amarillo")
      setColor("amarillo");
    else setColor("");
  };

  const cambiarLuzVerde = () => {
    if(color !== "verde")
      setColor("verde");
    else setColor("");
  };

  const cambiarLuzMorado = () => {
    if(color !== "morado")
      setColor("morado")
    else setColor("");
  }

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

  //funcion que maneja de forma autonoma el semaforo
  const encenderSemaforo = () => {
    if (!encendido)
      setEncendido(true);
    else setEncendido(false);
  };

  useEffect(() => {
    if(aux !== 0)
      if (!intervalo) {
        let index = 0;
        console.log(colores)
        let newIntervalo = setInterval(() => {
          if (index < colores.length) {
            setColor(colores[index]);
            index++;
          }
          else index = 0;
        }, 1000);
        setIntervalo(newIntervalo);
      } else stopInterval();
    else setAux(1);
  }, [encendido]);


  const agregarLuzMorada = ()=>{
    if ((!mostrarMorado) && (colores.length == 3)){
      setColores(colores.concat("morado"));
      setMostrarMorado(true);
    }else
      { 
        setMostrarMorado(false);
        colores.length--;
      }
  }

  return (
    <div className="container">
      { !mostrarMorado ? (<div className="caja d-flex mt-5">
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
        </div>) : ( 
        <div className="cajaMorado d-flex mt-5">
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
          <div
            className={"morado" + setBrillo("morado")}
            onClick={cambiarLuzMorado}
          ></div> 
        </div>
        )}
      <button className="btn btn-secondary my-5 me-2" onClick={agregarLuzMorada}>
        Agregar/Quitar luz morada
      </button>
      <button className="btn btn-primary my-5 ms-2" onClick={encenderSemaforo}>
        Encender o Apagar el Semaforo
      </button>
    </div>
  );
};

export default Semaforo;
