import './MainCard.css';
import photo from '../../assets/Food/Pierogi.jpg';

function MainCard() {
	return (
		<div className='mainCard'>
				<img className='mainCard__photo' src={photo} alt='pierogi'></img>
			<div className='mainCard__title'>
				<h1>Pierogi z Awganistanu</h1>
				<h2>Aushak are an Afghan version of dumplings, usually filled with leeks, onions, or chives. It's served with creamy garlic yogurt and a hearty tomato-based meat or lentil sauce. As aushak are time-consuming to make, this dish is usually reserved for special occasions. Filling and sealing the aushak is a wonderful opportunity to sit together and prepare this lovely dish in good company.</h2>
			</div>
		</div>
	);
}

export default MainCard;
