import React from 'react';
import './choice.styles.scss';

export const Choice = ({icon, border, id, play}) => {
	return (
		<div className="choice" style={{border: border}} id={id} onClick={play}>
			<div>
				<i className={icon} id={id}></i>
			</div>
		</div>
	);
};
