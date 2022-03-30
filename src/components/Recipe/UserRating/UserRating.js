import React, { useState, useEffect } from 'react';
import './UserRating.css';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function UserRating() {
  // User rating in local storage
  const [ratingValue, setRatingValue] = useState(localStorage.getItem("ratingValue" || 0));

  useEffect(() => {
		localStorage.setItem('ratingValue', ratingValue);
	  }, [ratingValue]);
  
	return (
		<div className='recipeRating'>
			<h4>A Tobie jak smakowało?</h4>
      <Rating
      name="simple-controlled"
      value={ratingValue}
      onChange={(event, newValue) => {
        setRatingValue(newValue);
      }}
      IconContainerComponent={IconContainer}
    />
		</div>
	);
}

export default UserRating;
