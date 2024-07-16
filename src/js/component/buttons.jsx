import React from "react";


const Button = (props) => {
    return (
        <>
            <div className="button-container">
                <button className='btn' onClick={props.btnReset}>Reset</button>
                <button className='btn' onClick={props.stopTimer}>Stop</button>
                <button className='btn' onClick={props.resumeTimer}>Resume</button>
            </div>
        </>
    );
}


export default Button;