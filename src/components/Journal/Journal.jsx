import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './Journal.module.css';

function Journal({ data }) {

	return (
		<div className={styles['journal-movie']}>
			{
				
				data.map(el => 
					<Button key={el.imdbID}>
						<Card
							title={el.Title}
							year={el.Year}
							type={el.Type}
							poster={el.Poster}
						/>
					</Button>) 
			}
			
		</div>
	);
}

export default Journal;