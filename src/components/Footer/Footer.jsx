import styles from './Footer.module.css';

function Footer() {

	return (
		<div className={styles['footer']}>
			<div className={styles['footer__items']}>&copy; 2024 Copyright Text</div>
		</div>
	);
}

export default Footer;