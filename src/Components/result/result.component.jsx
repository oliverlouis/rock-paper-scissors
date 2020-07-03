import React from 'react';
import {Choice} from '../choice/choice.component';
import './result.styles.scss';

export const Result = ({winner, computerChoice}) => {
	let gameWinner, resultStyle, icon, border;
	let displayComputerChoice = `Computer chose ${computerChoice}`;

	if (winner === 'player') {
		gameWinner = 'YOU WIN';
		resultStyle = '#91bd3a';
	} else if (winner === 'computer') {
		gameWinner = 'YOU LOSE';
		resultStyle = '#d32626';
	} else {
		gameWinner = 'DRAW';
		resultStyle = '#fe9801';
	}

	if (computerChoice === 'rock') {
		icon = 'far fa-hand-rock';
		border = '13px solid #d32626';
	} else if (computerChoice === 'paper') {
		icon = 'far fa-hand-paper';
		border = '13px solid #111d5e';
	} else {
		icon = 'far fa-hand-scissors';
		border = '13px solid #f3c623';
	}

	return (
		<div className="result">
			<div className="container">
				<h1 className="result__element" style={{color: resultStyle, fontSize: '40px', fontFamily: 'Rubik , sans-serif'}}>
					{gameWinner}
				</h1>
				<Choice className="result__element" icon={icon} style={{border: border}} />
				<h3 className="result__element">{displayComputerChoice}</h3>
			</div>
		</div>
	);
};
