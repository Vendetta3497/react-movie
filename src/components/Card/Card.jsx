import { useContext, useState } from 'react';
import styles from './Card.module.css';
import { MovieContext } from '../../context/MovieContext';

function Card({ title, year, type, poster, key, item}) {

	const [color, setColor] = useState(false);
	const { addMovie } = useContext(MovieContext);


	function actionWitnItem() {
		setColor(!color);
		
	}

	return (
		<div className={styles['card']} key={key}>
			<div className={color === false ? styles['card__favorite'] : styles['card_favorite-clecked']} onClick={actionWitnItem}><img src="../../../public/shape.svg" alt="" /></div>
			<img className={styles['card__img']} src={poster} alt="movie"/>
			<div className={styles['info-movie']}>
				<div className={styles['info-movie__title']}>{title}</div>
				<div className={styles['info-movie__more']}>
					<div className={styles['year']}>{year}</div>
					<div className={styles['type']}>{type}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;