import { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import styles from './RadioButtonList.module.css';

function RadioButtonList({getType}) {

	const options = [
		{id: 'all', lable: 'All'},
		{id: 'movie', lable: 'Movies'},
		{id: 'series', lable: 'Series'}
	];

	const [radio, setRadio] = useState(options[0].id);

	const handleCheckboxChange = (e) => {
		setRadio(e.target.value);
	};
   

	return (
		<div className={styles['radio-button-list']}>
			{options.map((option) => (
				<div className={styles['radio-wrapper']} key={option.id} onClick={() => getType(option.id)
				}>
					<RadioButton 
						name={option.id}
						value={option.id}
						id={option.id}
						checked={radio === option.id}
						onChange={handleCheckboxChange}>{option.lable}
					</RadioButton>
				</div>
			))}
		</div>
	);
}

export default RadioButtonList;
{/* <RadioButton value='all' id='all' name='all' checked={radio === 'all'} onChange={handleCheckboxChange}>All</RadioButton>
      <RadioButton value='movies' id='movies' name='movies' checked={radio === 'movies'} onChange={handleCheckboxChange}>Movies</RadioButton>
      <RadioButton value='series' id='series' name='series' checked={radio === 'series'} onChange={handleCheckboxChange}>Series</RadioButton> */}