import React from "react";


//create your first component
const Timer = (props) => {
	return (

		<div className="contador container-fluid d-flex justify-content-between w-75">
			<div className="reloicono"><i class="fa-regular fa-clock"></i></div>

			<div className="cienMiles">{props.cienMiles}</div>
			<div className="diezMiles">{props.diezMiles}</div>
			<div className="miles">{props.miles}</div>
			<div className="centenas">{props.centenas}</div>
			<div className="decenas">{props.decenas}</div>
			<div className="unidades">{props.unidades}</div>

		</div>

	);
};

export default Timer;

