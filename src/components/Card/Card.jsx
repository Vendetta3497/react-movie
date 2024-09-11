import styles from './Card.module.css';

function Card({ title, year, type, poster, key}) {

	return (
		<div className={styles['card']} key={key}>
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