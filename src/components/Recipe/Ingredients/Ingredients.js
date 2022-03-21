import React from 'react';
import Grid from '@mui/material/Grid';
import './Ingredients.css';

function Ingredients(params) {
	return (
		<Grid
			container
			className='recipeContainer__box recipeContainer__ingredients'
		>
			<Grid item>
				<h3>Składniki</h3>
				<ul>
                    <li>2 medium leeks</li>
                    <li>2 medium leeks</li>
                    <li>2 medium leeks</li>
                    <li>2 medium leeks</li>
                    <li>2 medium leeks</li>
                    <li>2 medium leeks</li>
                </ul>
					
				
			</Grid>
		</Grid>
	);
}


export default Ingredients;