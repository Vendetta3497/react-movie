import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovie] = useState([]);

	const addMovie = (item) => {
		const movieExists = movies.some((el) => el.imdbID === item.imdbID);
		if (movieExists) {
			alert('This movie is already in the list');
		} else {
			setMovie((prevMovies) => [...prevMovies, item]);
		}
	};

	return (
		<MovieContext.Provider value={{ movies, addMovie }}>
			{children}
		</MovieContext.Provider>
	);
};
