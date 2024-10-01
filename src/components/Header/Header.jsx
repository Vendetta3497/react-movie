import styles from './Header.module.css';

function Header({ children }) {

	return (
		<header className={styles['header']}>
			<h1 className={styles['header_title']}>React Movie</h1>
			{ children }
		</header>
	);
}

export default Header;