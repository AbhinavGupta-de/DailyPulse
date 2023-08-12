import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import axios from 'axios';

import { fetchNewsData } from './components/News';

const App = () => {
	const [newsData, setNewsData] = useState([]);
	const [defaultNews, setDefaultNews] = useState([]);

	useEffect(() => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() - 1);

		const formattedDate = currentDate.toISOString().split('T')[0];

		fetchNewsData('default', formattedDate)
			.then((data) => setDefaultNews(data))
			.catch((error) => console.error(error));
	}, []);

	const handleSearch = (searchQuery) => {
		fetchNewsData(searchQuery)
			.then((data) => setNewsData(data))
			.catch((error) => console.error(error));
	};

	return (
		<div className="App">
			<NavBar onSearch={handleSearch} />
			<Hero />
			<Footer />
		</div>
	);
};

export default App;
