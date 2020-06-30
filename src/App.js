import React from 'react';
import './App.css';
import Scoreboard from './Components/scoreboard/scoreboard.component';
import {ChoiceList} from './Components/choice-list/choice-list.component';
import {Header} from './Components/header/header.component';

function App() {
	return (
		<div className="App">
			<Header />
			<Scoreboard />
			<ChoiceList />
		</div>
	);
}

export default App;
