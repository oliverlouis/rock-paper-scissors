import React from 'react';
import './choice-list.styles.scss';
import Choice from '../choice/choice.component';

export const ChoiceList = () => {
	return (
		<div className="choice-list">
			<Choice />
			<Choice />
			<Choice />
		</div>
	);
};
