import React from "react";


const Button = (props) => {
    return (
        <>
            <div className="button-container">
                <button className='btn' onClick={props.btnReset}>Reset</button>
                <button className='btn' onClick={props.btnPause}>Pause</button>
                <button className='btn' onClick={props.btnResume}>Resume</button>
            </div>
        </>
    );
}


export default Button;