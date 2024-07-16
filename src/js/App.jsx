import React from 'react';
import { useState, useEffect } from 'react';

import Timer from './component/timer.jsx'
import Button from './component/buttons.jsx';




const App = () => {

    // Función del contador
    
    const [contador, setContador] = useState(0);

    useEffect(() => {

        let interval = setInterval(() => {
            setContador(contador + 1);
        }, 1000)

        return () => clearInterval(interval)

    }, [contador])



    // Funciones para los botones

    function resetTimer() {
        return setContador(0)
    }

    function pauseTimer () {
        
    }

    function resumeTimer() {
    
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
                btnReset={resetTimer}
                btnPause={pauseTimer}
                btnResume={resumeTimer}
            />

        </>
    );
}

export default App;