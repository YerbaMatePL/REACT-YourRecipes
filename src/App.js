import React, { useState } from 'react';
import './App.css';
import MainCard from './components/MainCard/MainCard';
import Recipe from './components/Recipe/Recipe';

function App() {
	const [amountOfPortions , setAmountOfPortions] = useState(1);

	const updateAmountOfPortions = (dataFromChild) => {
		setAmountOfPortions(dataFromChild);
	};




	return (
		<div className='app wrapper'>
			<MainCard update={updateAmountOfPortions}/>
			<Recipe value={amountOfPortions}/>
		</div>
	);
}

export default App;
