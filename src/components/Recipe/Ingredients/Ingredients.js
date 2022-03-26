import Grid from '@mui/material/Grid';
import './Ingredients.css';

function Ingredients() {

	const crossLine = event => {
        const element = event.target;
        element.classList.toggle('completed');
    };

	return (
		<Grid
			container
			className='recipeContainer__box recipeContainer__ingredients'>
			<Grid item>
				<h3>Składniki</h3>
				<ul onClick={crossLine}>
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