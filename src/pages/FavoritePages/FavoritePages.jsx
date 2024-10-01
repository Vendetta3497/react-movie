
import { useContext } from 'react';
// import styles from './FavoritePages.module.css';
import { MovieContext, MovieProvider } from '../../context/MovieContext';
import Journal from '../../components/Journal/Journal';
import Body from '../../components/Body/Body';

function FavoritePages() {

	const { movies } = useContext(MovieContext);
	console.log(movies);
	

	return (
		<MovieProvider>
			<Body>
				{movies.length === 0 && <h2>You can add new move on the home page</h2>}
				<Journal data={movies}></Journal>
			</Body>
		</MovieProvider>
	);
}

export default FavoritePages;