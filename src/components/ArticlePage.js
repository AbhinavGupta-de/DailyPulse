import React from 'react';
import NavBar from './NavBar'; // Make sure to update the import path if needed

const ArticlePage = ({ article }) => {
	return (
		<div>
			<NavBar /> {/* Display the Navbar */}
			<div className="article-details">
				<img src={article.urlToImage} alt={article.title} />
				<h2>{article.title}</h2>
				<p>{article.content}</p>
				{/* Other article details */}
			</div>
		</div>
	);
};

export default ArticlePage;
