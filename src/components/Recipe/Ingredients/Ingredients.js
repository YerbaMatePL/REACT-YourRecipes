import Grid from '@mui/material/Grid';
import './Ingredients.css';

function Ingredients(props) {
	let multiplier = props.value;
	return (
		<Grid
			container
			className='recipeContainer__box recipeContainer__ingredients'>
			<Grid item>
				<h3>Składniki</h3>
				<ul onClick={props.crossLine}>
                    <li>{multiplier * 100} ml jogurtu naturalnego</li>
                    <li>{multiplier * 100} g mielonego mięsa wieprzowego</li>
                    <li>{multiplier * 15} g makaronu rurki</li>
                    <li>{multiplier * 20} ml oleju</li>
                    <li>{multiplier * 2} szt. ząbek czosnku</li>
                    <li>{multiplier * 20} g przecieru pomidorowego</li>
					<li>{multiplier * 5} g mielonego tymianku</li>
					<li>{multiplier * 5} g pieprzu</li>
					<li>{multiplier * 8} g soli</li>
					<li>{multiplier * 450} g mąki pszennej</li>
					<li>{multiplier * 1} szt. jajko</li>
					<li>{multiplier * 0.5} l letniej wody</li>
					<li>{multiplier * 20} g białego sera twarogowego</li>
					<li>{multiplier * 3} szt. liść świeżej mięty</li>
					<li>{multiplier * 2} szt. por</li>
					<li>{multiplier * 2} szt. cebula</li>
					<li>{multiplier * 5} g mielonego imbiru</li>
                </ul>
			</Grid>
		</Grid>
	);
}


export default Ingredients;