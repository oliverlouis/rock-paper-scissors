import React from 'react';
import './scoreboard.styles.scss';

export const Scoreboard = ({playerScore, computerScore, bestOf}) => {
	return (
		<div className="score-board">
			<div className="player-score score-header">
				<h3>Player Score</h3>
				<div className="score-count">
					<h1>{playerScore}</h1>
				</div>
			</div>
			<div className="round">
				Best of
				<br />
				<span>{bestOf}</span>
			</div>
			<div className="computer-score score-header">
				<h3>Computer Score</h3>
				<div className="score-count">
					<h1>{computerScore}</h1>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
