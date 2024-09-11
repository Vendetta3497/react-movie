import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Journal from './components/Journal/Journal';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import RadioButtonList from './components/RadioButtonList/RadioButtonList';


function App() {

	const [allData, setAllData] = useState([]);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);
	const [type, setType] = useState('all');
	const answer = <div className='reject'>{error}</div>;
	


	 const getData = async (el, type) => {
		setLoad(true);
		setError(null);
		try {
			const data  = await fetch(`http://www.omdbapi.com/?apikey=52eccc1e&s=${!el ? 'movie': el} ${type !== 'all' ? `&type=${type}` : 'all'}`);
			const response = await data.json();
			setAllData(response.Search);
			if (response.Search === undefined) {
				setError('Not found');
			}
			setLoad(true);
		} catch(e) {
			console.error(e.message);
		} finally {
			setLoad(false);
		}
	};
					
	useEffect(() => {
		getData();
	}, []);
   
	const nameOfMovies = (el) => {
		getData(el, type);
	};

	console.log(type);
	

	return (
		<>
			<Header>
			</Header>
			<Body>
				<RadioButtonList getType={setType}/>
				<Search onSubmit={nameOfMovies}/>
				{ load && <Preloader/> }
				{ error && answer }
				{ allData && !load && <Journal data={allData}/> }
			</Body>
			<Footer/>
		</>
	);
}

export default App;
