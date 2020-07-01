import React from 'react';
import {Choice, winner} from '../choice/choice.component';

const Result = () => {
	return (
		<div className="result">
			<h1>{winner === 'player' ? 'YOU WIN' : 'YOU LOSE'}</h1>
			<div className="choices">
				<Choice />
				<h3>Computer chose </h3>
			</div>
		</div>
	);
};
