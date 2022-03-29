import React, { useState, useEffect } from 'react';
import './App.css';
import MainCard from './components/MainCard/MainCard';
import Recipe from './components/Recipe/Recipe';
import Switch from '@mui/material/Switch';


function App() {
	// Theme and local storage
	const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	  }, [theme]);
	
	const checkTheme = () =>
		theme === 'light' ? setTheme('dark') : setTheme('light');
	// Amount of Portions
	const [amountOfPortions, setAmountOfPortions] = useState(1);

	const updateAmountOfPortions = (dataFromChild) => {
		setAmountOfPortions(dataFromChild);
	};
	
	return (
		<div className={`app wrapper app__bgc--${theme}`}>
			<Switch onChange={checkTheme} color='primary'/>
			<MainCard update={updateAmountOfPortions} />
			<Recipe value={amountOfPortions} />
		</div>
	);
}

export default App;
