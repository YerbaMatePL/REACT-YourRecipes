import React from 'react';
import Grid from '@mui/material/Grid';
import './Preparation.css';



function Preparation(props) {
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
		</Grid>
	);
}

export default Preparation;
