import React from 'react';
import { useState, useEffect } from 'react';

import Timer from './component/timer.jsx'
import Button from './component/buttons.jsx';




const App = () => {

    // Función del contador

    const [contador, setContador] = useState(0);
    const [timeInterval, setTimeInterval] = useState(false);

    // Function to start the timer
    useEffect(() => {
        setTimeInterval(setInterval(() => {
            setContador((contador) => contador + 1);
        }, 1000));
    }, []);


    let resumeContador = () => {
        if (setTimeInterval !== true) {
            setTimeInterval(setInterval(() => {
                setContador((prev) => prev + 1);
            }, 1000));
        }
    }


    // Calculamos los segundos 

    function calcularSegundos(a, b) {

        return Math.floor(a / b) % 10;

    }


    return (
        <>
            <Timer
                cienMiles={calcularSegundos(contador, 100000)}
                diezMiles={calcularSegundos(contador, 10000)}
                miles={calcularSegundos(contador, 1000)}
                centenas={calcularSegundos(contador, 100)}
                decenas={calcularSegundos(contador, 10)}
                unidades={calcularSegundos(contador, 1)}
            />

            <Button
                btnReset={() => setContador(0)}
                btnPause={() => clearInterval(timeInterval)}
                btnResume={resumeContador}
            />

        </>
    );
}

export default App;


