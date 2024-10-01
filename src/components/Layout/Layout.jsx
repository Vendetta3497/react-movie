import styles from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout() {

	return (
		<>
			<Header>
				<nav className={styles['nav-wrapper']}>
					<ul className={styles['nav']}>
						<li><NavLink to='/' className={({ isActive }) =>
							`${styles['nav-item']} ${isActive ? styles['active'] : ''}`} ><img  className={styles['nav-item__img']} src='../../../public/video.svg' alt="home" />Home</NavLink></li>
						<li><NavLink to='/favorite' className={({ isActive }) =>
							`${styles['nav-item']} ${isActive ? styles['active'] : ''}`} ><img  className={styles['nav-item__img']} src='../../../public/shape.svg' alt="favorite" />Favorite</NavLink></li>
					</ul>
				</nav>
			</Header>
			<Outlet/>
			<Footer/>
		</>

	);
}

export default Layout;