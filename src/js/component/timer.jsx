import React, { useState , useEffect} from "react";
import Button from "./buttons"


//create your first component
const Timer = (props) => {
	const [numero, setNumero] = useState(props.total)
	const [timeInterval, setTimeInterval] = useState(false);
    const [active, setActive] = useState(true);

    useEffect(() => {
        setTimeInterval(setInterval(() => {
            setNumero((numero) => numero + 1);
        }, 1000));
    }, []);

  
    /** 
	 * Función de reanudar el numero
	 */
    function activarNumero() {
        if (!active) {
            setActive(true);
            setTimeInterval(setInterval(() => {
                setNumero((numero) => numero + 1);
            }, 1000));
        }
    }


    /**
	 * Pausa el timer
	 */
    function pauseNumero () {
        clearInterval(timeInterval);
        setActive(false)
    }

/**
 * Devuelve el numero conla posicion adecuada
 * @param {number} total 
 * @param {*number} ordinal
 * @returns 
 */
	function calcularSegundos(a, b) {
        return Math.floor(a / b) % 10;
    }


	return (
		<>
		<div className="contador container-fluid d-flex justify-content-between w-75">
			<div className="reloicono"><i className="fa-regular fa-clock"></i></div>

			<div className="cienMiles">{calcularSegundos(numero, 100000)}</div>
			<div className="diezMiles">{calcularSegundos(numero, 10000)}</div>
			<div className="miles">{calcularSegundos(numero, 1000)}</div>
			<div className="centenas">{calcularSegundos(numero, 100)}</div>
			<div className="decenas">{calcularSegundos(numero, 100)}</div>
			<div className="unidades">{calcularSegundos(numero, 1)}</div>

		</div>

		<Button
                btnReset={() => setNumero(0)}
                btnPause={pauseNumero}
                btnResume={activarNumero}
                isActive={active}
            />
		</>

	);
};

export default Timer;

