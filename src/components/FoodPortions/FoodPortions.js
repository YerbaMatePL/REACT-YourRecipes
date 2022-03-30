import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function FoodPortions(props) {
	return (
		<Grid item xs={6} sm={3}>
			<Paper className='mainCard__info__item' elevation={4}>
				<h5>Ilość porcji</h5>
				<TextField
					onChange={(e) => props.update(e.target.value)}
					id='outlined-number'
					type='number'
					defaultValue='1'
					variant='outlined'
					inputProps={{
						max: 100,
						min: 1,
						step: 1,
					}}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Paper>
		</Grid>
	);
}

export default FoodPortions;
