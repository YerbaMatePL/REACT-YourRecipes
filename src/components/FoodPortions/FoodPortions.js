import './FoodPortions.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function FoodPortions() {
	return (
		<Grid item xs={6} sm={3}>
			<Paper className='mainCard__info__item' elevation={4}>
				<h5>Ilość porcji</h5>
				<TextField
					id='outlined-number'
					type='number'
					defaultValue='1'
					autoFocus='true'
					variant='outlined'
					inputProps={{
						max: 10,
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
