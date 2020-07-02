import React from 'react';
import {Choice} from '../choice/choice.component';
import './result.styles.scss';

export const Result = ({winner, computerChoice}) => {
	let gameWinner;
	let displayComputerChoice = `Computer chose ${computerChoice}`;

	if (winner === 'player') {
		gameWinner = 'YOU WIN';
	} else if (winner === 'computer') {
		gameWinner = 'YOU LOSE';
	} else {
		gameWinner = 'DRAW';
	}

	return (
		<div className="result">
			<div className="container">
				<h1>{gameWinner}</h1>
				<div className="choices">
					<Choice />
					<h3>{displayComputerChoice}</h3>
				</div>
			</div>
		</div>
	);
};
