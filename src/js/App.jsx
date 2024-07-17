import React from 'react';
import { useState, useEffect } from 'react';

import Timer from './component/timer.jsx'
import Button from './component/buttons.jsx';




const App = () => {

    // Función del contador

    const [contador, setContador] = useState(0);
    const [timeInterval, setTimeInterval] = useState(false);
    const [active, setActive] = useState(true);

    useEffect(() => {
        setTimeInterval(setInterval(() => {
            setContador((contador) => contador + 1);
        }, 1000));
    }, []);

  
    // Función de reanudar el contador


    let activarContador = () => {
        if (active === false) {
            setActive(true);
            setTimeInterval(setInterval(() => {
                setContador((contador) => contador + 1);
            }, 1000));
        }
    }

    // Función de pausar el contador
    let pauseContador = () => {
        clearInterval(timeInterval);
        setActive(false)
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
                btnPause={pauseContador}
                btnResume={activarContador}
            />

        </>
    );
}

export default App;


