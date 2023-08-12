import React from 'react';
import NavBar from './NavBar'; // Make sure to update the import path if needed

const ArticlePage = ({ article }) => {
	return (
		<div>
			<div className="article-details">
				<img src={article.urlToImage} alt={article.title} />
				<h2>{article.title}</h2>
				<p>{article.content}</p>
			</div>
		</div>
	);
};

export default ArticlePage;
