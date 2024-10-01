import styles from './MainPages.module.css';
import Body from '../../components/Body/Body.jsx';
import Journal from '../../components/Journal/Journal';
import { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import Search from '../../components/Search/Search';
import RadioButtonList from '../../components/RadioButtonList/RadioButtonList';

function MainPages() {
	const [allData, setAllData] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);
	const [type, setType] = useState('all');
	const answer = <div className={styles['reject']}>{error}</div>;

	const getData = async (el, type) => {
		setLoad(true);
		setError(null);
		try {
			const data  = await fetch(`http://www.omdbapi.com/?apikey=52eccc1e&s=${el}${type !== 'all' ? `&type=${type}` : ''}`);
			const response = await data.json();
			setAllData(response.Search);
			if (response.Search === undefined) {
				setError('Not found');
			}
		} catch(e) {
			console.error(e.message);
		} finally {
			setLoad(false);
		}
	};
					
	useEffect(() => {
		getData('movie', 'all');
	}, []);
   
	const nameOfMovies = (el) => {
		getData(el, type);
	};
	

	return (
		<>
			<Body>
				<RadioButtonList getType={setType}/>
				<Search onSubmit={nameOfMovies}/>
				{ load && <Preloader/> }
				{ error && answer }
				{ allData && !load && <Journal data={allData}/>}
			</Body>
		</>
	);

}

export default MainPages;

// q