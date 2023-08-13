import React from 'react';

const ArticlePage = ({ article }) => {
	return (
		<div className="article-page">
			<div className="article-details">
				<img src={article.image} alt={article.title} />
				<h2>{article.title}</h2>
				<p>{article.description}</p>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					Read the full article
				</a>
			</div>
		</div>
	);
};

export default ArticlePage;
