import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { fetchNewsData } from './components/News';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ArticlePage from './components/ArticlePage';

const App = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedArticle, setSelectedArticle] = useState(null);

	const handleSearch = async (searchQuery) => {
		const results = await fetchNewsData(searchQuery);
		setSearchResults(results);
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

	const handleArticleClick = (article) => {
		setSelectedArticle(article);
	};

	const handleLogoClick = () => {
		setSelectedArticle(null);
	};
	return (
		<div className="App">
			<NavBar onSearch={handleSearch} onLogoClick={handleLogoClick} />
			{selectedArticle ? (
				<ArticlePage article={selectedArticle} />
			) : (
				<Hero articles={searchResults} onClick={handleArticleClick} />
			)}

			<Footer />
		</div>
	);
};
export default App;
