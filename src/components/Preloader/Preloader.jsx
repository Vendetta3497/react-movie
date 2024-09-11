import styles from '../Preloader/Preloader.module.css';

function Preloader() {

	return (
		<div className={styles['Preloader']}>
			<div className={styles['indeterminate']}></div>
		</div>
	);
}

export default Preloader;