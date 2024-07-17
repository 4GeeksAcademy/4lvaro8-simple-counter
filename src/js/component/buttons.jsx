import React from "react";


const Button = (props) => {
    return (
        <>
            <div className="button-container container-fluid justify-content-center d-flex w-75">
                <button className='btn' onClick={props.btnReset}>Reset</button>
                <button className='btn' onClick={props.btnPause}>Pause</button>
                <button className='btn' onClick={props.btnResume}>Resume</button>
            </div>
        </>
    );
}


export default Button;