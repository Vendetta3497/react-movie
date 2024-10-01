
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Journal.module.css';

function Journal({ data }) {
	const navigate = useNavigate();

	function movieNavigate(el) {
		navigate(`/${el.imdbID}` ,{state: {infoMovie: el}});
	}


	return (
		<div className={styles['journal-movie']}>
			{

				data.map(el => 
					<div className={styles['card-wrapper']}
						key={el.imdbID} 
						onClick={() => movieNavigate(el)}>
						<Card 
							item={el}
							title={el.Title}
							year={el.Year}
							type={el.Type}
							poster={el.Poster}
						/>
					</div>) 
			}
		
		</div>
	);
}

export default Journal;