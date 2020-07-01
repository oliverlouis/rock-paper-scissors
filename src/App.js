import React from 'react';
import './App.css';
import Scoreboard from './Components/scoreboard/scoreboard.component';
import {ChoiceList} from './Components/choice-list/choice-list.component';
import {Header} from './Components/header/header.component';
import Gameboard from './Components/game-board/game-board.component';

function App() {
	return (
		<div className="App">
			<Header />
			<Gameboard>
				<Scoreboard />
				<ChoiceList />
			</Gameboard>
		</div>
	);
}

export default App;
