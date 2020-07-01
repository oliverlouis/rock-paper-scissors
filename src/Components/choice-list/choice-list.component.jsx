import React from 'react';
import './choice-list.styles.scss';
import {Choice} from '../choice/choice.component';

export const ChoiceList = () => {
	return (
		<div className="choice-list">
			<Choice icon="far fa-hand-rock" border="13px solid #d32626" id="rock" />
			<Choice icon="far fa-hand-paper" border="13px solid #111d5e" id="paper" />
			<Choice icon="far fa-hand-scissors" border="13px solid #f3c623" id="scissors" />
		</div>
	);
};
