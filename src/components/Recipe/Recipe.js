import React from 'react';
import './Recipe.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Ingredients from './Ingredients/Ingredients';

function Recipe() {
	return (
		<Box className='recipeContainer'>
			<Ingredients />

			<Grid
				container
				className=' recipeContainer__box recipeContainer__preparation'
			>
				<Grid item>
					<h3>Przygotowanie</h3>
					<ol>
						<li>Cut the leeks in half lengthwise, keeping the end intact, and wash in between the layers. Very thinly slice the white and light green portions of the leeks. The thinner you can slice this the better. Our 2 medium leeks gave approximately 5 cups of chopped leeks.</li>
						<li>In a large strainer over a bowl, combine the leeks, oil, and salt. Mix together using your hands, massaging to ensure the leeks are well coated with the oil and salt. Allow the mixture to sit for at least 5 minutes to soften.</li>
						<li>Cut the leeks in half lengthwise, keeping the end intact, and wash in between the layers. Very thinly slice the white and light green portions of the leeks. The thinner you can slice this the better. Our 2 medium leeks gave approximately 5 cups of chopped leeks.</li>
						<li>Cut the leeks in half lengthwise, keeping the end intact, and wash in between the layers. Very thinly slice the white and light green portions of the leeks. The thinner you can slice this the better. Our 2 medium leeks gave approximately 5 cups of chopped leeks.</li>
					</ol>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Recipe;
