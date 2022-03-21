import './MainCard.css';
import photo from '../../assets/Food/Pierogi.jpg';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FoodPortions from '../FoodPortions/FoodPortions';


function MainCard() {


	return (
		<div className='mainCard'>
			<img className='mainCard__photo' src={photo} alt='pierogi'></img>
			<div className='mainCard__title'>
				<h1>Pierogi Aushak</h1>
				<p>
					Aushak are an Afghan version of dumplings, usually filled with leeks,
					onions, or chives. It's served with creamy garlic yogurt and a hearty
					tomato-based meat or lentil sauce. As aushak are time-consuming to
					make, this dish is usually reserved for special occasions. Filling and
					sealing the aushak is a wonderful opportunity to sit together and
					prepare this lovely dish in good company.
				</p>

				<Box className='mainCard__info'>
					<Grid container justifyContent='center'>
					<FoodPortions></FoodPortions>

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
