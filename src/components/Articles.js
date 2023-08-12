import React from 'react';

const Articles = ({ article, onClick }) => {
	return (
		<div className="article-box" onClick={() => onClick(article)}>
			<img src={article.urlToImage} alt={article.title} />
			<h3>{article.title}</h3>
			<p className="author">Author: {article.author}</p>{' '}
			{/* Display the author */}
		</div>
	);
};

export default Articles;
