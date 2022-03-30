import './MainCard.css';
import photo from '../../assets/Food/Pierogi.jpg';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FoodPortions from '../FoodPortions/FoodPortions';

function MainCard(props) {
	return (
		<div className='mainCard'>
			<img className='mainCard__photo' src={photo} alt='pierogi'></img>
			<div className='mainCard__title'>
				<h1>Pierogi Aushak</h1>
				<p>
				Aushak - to afgańska wersja pierogów, zwykle wypełnionych porami, cebulą lub szczypiorkiem. Podaje się je z kremowym jogurtem czosnkowym i wyrazistym sosem mięsnym lub soczewicowym na bazie pomidorów. Ponieważ aushak są czasochłonne w przygotowaniu, danie to jest zwykle zarezerwowane na specjalne okazje. 
				</p>

				<Box className='mainCard__info'>
					<Grid container justifyContent='center'>
					<FoodPortions update={props.update}></FoodPortions>
						<Grid item xs={5} sm={3}>
							<Paper className='mainCard__info__item' elevation={4}>
								<h5>Czas ogółem</h5>
								<p>30 min</p>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className='mainCard__info__item' elevation={4}>
								<h5>Przygotowanie</h5>
								<p>10 min</p>
							</Paper>
						</Grid>
						<Grid item xs={5} sm={3}>
							<Paper className='mainCard__info__item' elevation={4}>
								<h5>Gotowanie</h5>
								<p>20 min</p>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
}

export default MainCard;
