import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { fetchNewsData } from './components/News';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedArticle, setSelectedArticle] = useState(null);

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
				setSearchResults(results);
			} catch (error) {
				console.error('Error fetching default news:', error);
			}
		}
		fetchDefaultNews();
	}, []);

	const handleLogoClick = () => {
		setSelectedArticle(null);
	};

	return (
		<div className="App">
			<NavBar onSearch={handleSearch} onLogoClick={handleLogoClick} />
			<Hero />
			<Footer />
		</div>
	);
};
export default App;
