import Grid from '@mui/material/Grid';
import './Ingredients.css';

function Ingredients(props) {

	return (
		<Grid
			container
			className='recipeContainer__box recipeContainer__ingredients'>
			<Grid item>
				<h3>Składniki</h3>
				<ul onClick={props.crossLine}>
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