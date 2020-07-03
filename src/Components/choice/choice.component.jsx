import React from 'react';
import './choice.styles.scss';

export const Choice = ({icon, border, id, play}) => {
	// let customStyle;

	if (id === 'rock') {
	}
	return (
		<div className="choice icon" style={{border: border}} id={id} onClick={play}>
			<div>
				<i className={icon} id={id}></i>
			</div>
		</div>
	);
};
