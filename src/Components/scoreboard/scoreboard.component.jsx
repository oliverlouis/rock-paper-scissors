import React from 'react';
import './scoreboard.styles.scss';

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playerScore: 0,
			computerScore: 0,
		};
	}

	render() {
		return (
			<div className="score-board">
				<div className="player-score score-header">
					<h3>Player Score</h3>
					<div className="score-count">
						<h1>{this.state.playerScore}</h1>
					</div>
				</div>
				<div className="computer-score score-header">
					<h3>Computer Score</h3>
					<div className="score-count">
						<h1>{this.state.computerScore}</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Scoreboard;
