import React from 'react';
import Scoreboard from '../scoreboard/scoreboard.component';
import {ChoiceList} from '../choice-list/choice-list.component';
import {Result} from '../result/result.component';
import './game-board.styles.scss';

class Gameboard extends React.Component {
	constructor() {
		super();

		this.state = {
			playerScore: 0,
			computerScore: 0,
			winner: '',
			computerChoice: '',
			bestOf: 5,
		};
	}

	play = (event) => {
		let playerChoice = event.target.id;
		let computerChoice = this.getComputerChoice();
		this.setState({computerChoice: computerChoice});
		console.log(playerChoice, computerChoice);
		let winner = this.getWinner(playerChoice, computerChoice);
		this.setState({winner: winner});
		console.log(winner);
		if (winner === 'player') {
			this.setState((prevState) => {
				return {playerScore: prevState.playerScore + 1};
			});
		} else if (winner === 'computer') {
			this.setState((prevState) => {
				return {computerScore: prevState.computerScore + 1};
			});
		}
	};

	getComputerChoice = () => {
		let choice = Math.random();

		if (choice < 0.34) {
			return 'rock';
		} else if (choice >= 0.34 && choice < 0.66) {
			return 'paper';
		} else {
			return 'scissors';
		}
	};

	getWinner = (player, computer) => {
		if (player === computer) {
			return 'draw';
		} else if (player === 'rock') {
			if (computer === 'paper') {
				return 'computer';
			} else return 'player';
		} else if (player === 'paper') {
			if (computer === 'rock') {
				return 'player';
			} else return 'computer';
		} else if (player === 'scissors') {
			if (computer === 'rock') {
				return 'computer';
			} else return 'player';
		}
	};

	render() {
		return (
			<div className="game-board">
				<Scoreboard playerScore={this.state.playerScore} computerScore={this.state.computerScore} bestOf={this.state.bestOf} />
				<ChoiceList play={this.play} />
				<Result winner={this.state.winner} computerChoice={this.state.computerChoice} />
			</div>
		);
	}
}

export default Gameboard;
