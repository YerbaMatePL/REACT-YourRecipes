import React from 'react';
import './Recipe.css';
import Box from '@mui/material/Box';
import Preparation from './Preparation/Preparation'
import Ingredients from './Ingredients/Ingredients';

function Recipe() {
	return (
		<Box className='recipeContainer'>
			<Ingredients />
			<Preparation/>
		</Box>
	);
}

export default Recipe;
