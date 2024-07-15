import React from 'react';
import { useState, useEffect } from 'react';

import Timer from './component/timer.jsx'



const App = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {

        let interval = setInterval(() => {
            setContador(contador + 1);
        }, 1000)

        return () => clearInterval(interval)

    }, [contador])
    

    function calcularSegundos(a, b) {

        return Math.floor(a / b) % 10;

    }

    return (

        <Timer
            cienMiles={calcularSegundos(contador, 100000)}
            diezMiles={calcularSegundos(contador, 10000)}
            miles={calcularSegundos(contador, 1000)}
            centenas={calcularSegundos(contador, 100)}
            decenas={calcularSegundos(contador, 10)}
            unidades={calcularSegundos(contador, 1)}
        />

    );
}

export default App;