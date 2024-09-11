import styles from './Header.module.css';

function Header() {

	return (
		<div className={styles['header']}>
			<h1 className={styles['header_title']}>React Movie</h1>
		</div>
	);
}

export default Header;