import { useState } from 'react';
import styles from './Search.module.css';

function Search({onSubmit}) {


	const [keyValue, setKeyValue] = useState(0);

	const inputReset = () => {
		setKeyValue(keyValue + 1);
	};

	const nameOfMovies = (e) => {
		e.preventDefault();
		let data = new FormData(e.target);
		let search = data.get('search');
		onSubmit(search);
		inputReset();
	};
	

	return (
		<form className={styles['form']} onSubmit={nameOfMovies}>
			<input name='search' className={styles['search']} type="text" id="search" placeholder="Search for..." required key={keyValue}/>
			<button className={styles['submit']}  value="go" id="submit">Go</button>
		</form>
	);
}

export default Search;