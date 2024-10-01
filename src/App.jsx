import { Routes, Route } from 'react-router-dom';
import MainPages from './pages/MainPages/MainPages';
import FavoritePages from './pages/FavoritePages/FavoritePages';
import CardPages from './pages/CardPages/CardPages.jsx';
import Layout from './components/Layout/Layout.jsx';
import {  MovieProvider } from './context/MovieContext.jsx';


function App() {
	
	return (
		<>
			<MovieProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path='/' element={<MainPages/>} />
						<Route path='/:id' element={<CardPages/>} />
						<Route path="/favorite" element={<FavoritePages/>} />
					</Route>
				</Routes>
			</MovieProvider>
		</>
	);
}

export default App;
