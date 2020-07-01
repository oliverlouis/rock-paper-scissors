import React from 'react';
import './choice.styles.scss';

export const scores = {
	playerScore: 0,
	computerScore: 0,
};

function play(event) {
	let playerChoice = event.target.id;
	let computerChoice = getComputerChoice();
	console.log(playerChoice, computerChoice);
	let winner = getWinner(playerChoice, computerChoice);
	console.log(winner);
}

function getComputerChoice() {
	let choice = Math.random();

	if (choice < 0.34) {
		return 'rock';
	} else if (choice >= 0.34 && choice < 0.66) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function getWinner(player, computer) {
	if (player === computer) {
		return 'draw';
	} else if (player === 'rock') {
		if (computer === 'paper') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (player === 'paper') {
		if (computer === 'rock') {
			return 'player';
		} else return 'computer';
	} else if (player === 'scissors') {
		if (computer === 'rock') {
			return 'computer';
		} else {
			return 'player';
		}
	}
}

export const Choice = ({icon, border, id}) => {
	return (
		<div className="choice" style={{border: border}} id={id} onClick={play}>
			<div>
				<i className={icon} id={id}></i>
			</div>
		</div>
	);
};
