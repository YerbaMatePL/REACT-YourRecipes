import React from 'react';
import Grid from '@mui/material/Grid';
import './Preparation.css';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';



const labels = {
	0.5: 'Bardzo niesmaczne',
	1: 'Niesmaczne',
	1.5: 'Kiepskie',
	2: 'Słabe',
	2.5: 'Niezłe',
	3: 'Całkiem dobre',
	3.5: 'Dobre!',
	4: 'Bardzo dobre!',
	4.5: 'Pyszne!',
	5: 'Przepyszne!',
  };


function Preparation(props) {
	const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);

	return (
		<Grid
			container
			className=' recipeContainer__box recipeContainer__preparation'
		>
			<Grid item>
				<h3>Przygotowanie</h3>
				<ol onClick={props.crossLine}>
					<li>
						Cut the leeks in half lengthwise, keeping the end intact, and wash
						in between the layers. Very thinly slice the white and light green
						portions of the leeks. The thinner you can slice this the better.
						Our 2 medium leeks gave approximately 5 cups of chopped leeks.
					</li>
					<li>
						In a large strainer over a bowl, combine the leeks, oil, and salt.
						Mix together using your hands, massaging to ensure the leeks are
						well coated with the oil and salt. Allow the mixture to sit for at
						least 5 minutes to soften.
					</li>
					<li>
						Cut the leeks in half lengthwise, keeping the end intact, and wash
						in between the layers. Very thinly slice the white and light green
						portions of the leeks. The thinner you can slice this the better.
						Our 2 medium leeks gave approximately 5 cups of chopped leeks.
					</li>
					<li>
						Cut the leeks in half lengthwise, keeping the end intact, and wash
						in between the layers. Very thinly slice the white and light green
						portions of the leeks. The thinner you can slice this the better.
						Our 2 medium leeks gave approximately 5 cups of chopped leeks.
					</li>
				</ol>
			</Grid>
			<Grid item>
			
			<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

      {value !== null && (
        <Box style={{fontSize:'30px'}}sx={{ ml: 2,py:7 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
	

			</Grid>
		</Grid>
	);
}

export default Preparation;
