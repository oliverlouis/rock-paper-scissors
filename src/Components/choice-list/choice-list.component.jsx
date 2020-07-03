import React from 'react';
import './choice-list.styles.scss';
import {Choice} from '../choice/choice.component';

export const ChoiceList = ({play, winner, reset}) => {
	return (
		<div className="choice-list" onClick={reset}>
			{!winner ? (
				<div className="choice-container">
					<Choice icon="far fa-hand-rock" border="13px solid #d32626" id="rock" play={play} />
					<Choice icon="far fa-hand-paper" border="13px solid #111d5e" id="paper" play={play} />
					<Choice icon="far fa-hand-scissors" border="13px solid #f3c623" id="scissors" play={play} />
				</div>
			) : null}
		</div>
	);
};
