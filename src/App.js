import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { fetchNewsData } from './components/News';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App = () => {
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (searchQuery) => {
		if (searchQuery.trim() !== '') {
			setSearchResults(fetchNewsData(searchQuery));
		}
	};

	useEffect(() => {
		// Fetch default news data here
		async function fetchDefaultNews() {
			try {
				const results = await fetchNewsData('example');
				console.log(results);
				setSearchResults(results);
			} catch (error) {
				console.error('Error fetching default news:', error);
			}
		}
		fetchDefaultNews();
	}, []);

	return (
		<div className="App">
			<NavBar onSearch={handleSearch} />
			<Hero articles={searchResults} />
			<Footer />
		</div>
	);
};
export default App;
