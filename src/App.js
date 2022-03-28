import React, { useState } from 'react';
import './App.css';
import MainCard from './components/MainCard/MainCard';
import Recipe from './components/Recipe/Recipe';
import Switch from '@mui/material/Switch';


function App() {
	// Theme
	const [theme, setTheme] = useState('light');

	const checkTheme = () => theme === 'light' ? setTheme('dark') :setTheme('light') ;

	// Amount of Portions
	const [amountOfPortions , setAmountOfPortions] = useState(1);

	const updateAmountOfPortions = (dataFromChild) => {
		setAmountOfPortions(dataFromChild);
	};
	return (
		<div className={`app wrapper app__bgc--${theme}`}>
			<Switch onChange={checkTheme} defaultChecked color="default"  
			inputProps={{ 'aria-label': 'checkbox with default color' }}/>
			<MainCard update={updateAmountOfPortions}/>
			<Recipe value={amountOfPortions}/>
		</div>
		
	);
}

export default App;
