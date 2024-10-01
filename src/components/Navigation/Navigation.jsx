import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import FavoritePages from '../../pages/FavoritePages/FavoritePages.jsx';

function Navigation() {

	return (
		<nav className={styles['nav-wrapper']}>
			<ul className={styles['nav']}>
				<li><Link to={'/'}>React Movie</Link></li>
				<li><Link to={<FavoritePages/>}><img src="../../assets/favorite-svgrepo-com.svg" alt="favorite" /></Link></li>
			</ul>
		</nav>
	);
}

export default Navigation;