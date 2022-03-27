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
					Warzywa umyć i osączyć z wody. 
					</li>
					<li>
					Przygotować ciasto: mąkę przesypać na stolnicę i wymieszać ze szczyptą soli. Do wymieszanej mąki wbić jajko, wlać letnią wodę i wyrobić elastyczne ciasto. Wyrobione rozwałkować na grubość 0,5 mm i wyciąć kubkiem krążki.
					</li>
					<li>
					Przygotować wypełnienie: pory oraz miętę pokroić w cienkie plastry. Cebulę obrać ze skóry i zeszklić na 3 łyżkach rozgrzanego oleju na na patelni. Do zeszklonej cebuli dodać pokrojone pory oraz miętę, po czym składniki doprawić do smaku mielonym imbirem, pieprzem oraz solą, wymieszać i smażyć przez 1,5 minuty na średnim ogniu. 
					</li>
					<li>
					Potem do smażonych składników dodać pokruszony drobno ser biały, ponownie wymieszać i smażyć przez kolejne 1,5 minuty. Usmażone ściągnąć z ognia, lekko przestudzić i łyżeczką nałożyć na wycięte krążki, po czym całość zlepić ręcznie. 
					</li>
					<li>Zlepione wrzucić do 1 l gotującej się wody. Gotować przez trzy minuty, potem odcedzić łyżką cedzakowa i wyłożyć na talerz.</li>
					<li>Makaron rurki zalać 1 l lekko osolonej wody ugotować do miękkości i odcedzić. </li>
					<li>Rozgrzać 3 łyżki oleju na patelni i zeszklić na nim obrany i pokrojony drobno czosnek. Do zeszklonego czosnku dodać mielone mięso wieprzowe i smażyć przez 1 minutę na średnim ogniu.Potem dodać do tego ugotowany wcześniej makaron i przecier pomidorowy. Wszystko doprawić do smaku pieprzem oraz solą, wymieszać i dusić pod przykryciem przez 4 minuty. </li>
					<li> Gotowe ściągnąć z ognia i wyłożyć na składniki na talerzu. Całość zalać jogurtem naturalnym i posypać mielonym tymiankiem.</li>
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
