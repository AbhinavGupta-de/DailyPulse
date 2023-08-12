import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { fetchNewsData } from './components/News';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ArticlePage from './components/ArticlePage';

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
				const results = await fetchNewsData('example'); // Replace with your default search query
				setSearchResults(results);
			} catch (error) {
				console.error('Error fetching default news:', error);
			}
		}
		fetchDefaultNews();
	}, []); // Empty dependency array means this effect runs only once on component mount

	const handleLogoClick = () => {
		setSelectedArticle(null);
	};
	const handleArticleClick = (article) => {
		setSelectedArticle(article);
	};

	return (
		<div className="App">
			<NavBar onSearch={handleSearch} onLogoClick={handleLogoClick} />
			{selectedArticle ? (
				<ArticlePage article={selectedArticle} />
			) : (
				<Hero articles={searchResults} onArticleClick={handleArticleClick} />
			)}
			<Hero />
			<Footer />
		</div>
	);
};
export default App;
