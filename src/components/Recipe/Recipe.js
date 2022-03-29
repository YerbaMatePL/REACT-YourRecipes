import React from 'react';
import './Recipe.css';
import Box from '@mui/material/Box';
import Preparation from './Preparation/Preparation';
import Ingredients from './Ingredients/Ingredients';
import Rating from './Rating/Rating';

const crossLine = (event) => {
	const element = event.target;
	element.classList.toggle('completed');
};

function Recipe(props) {
	return (
		<div className='recipeMainContainer'>
			<Box className='recipeContainer'>
				<Ingredients crossLine={crossLine} value={props.value} />
				<Preparation crossLine={crossLine} />
			</Box>
			<Box>
				<Rating />
			</Box>
		</div>
	);
}

export default Recipe;
