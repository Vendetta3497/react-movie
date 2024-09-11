import styles from './Body.module.css';

function Body({ children }) {

	return (
		<main className={styles['main']}>
			{children}
		</main>
	);
}

export default Body;