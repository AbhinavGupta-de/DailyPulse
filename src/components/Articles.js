import React from 'react';

const Articles = ({ article, onClick }) => {
	return (
		<div className="article-box" onClick={() => onClick(article)}>
			<img src={article.image} alt={article.title} />
			<h3>{article.title}</h3>
			<p className="author">Author: {article.source.name}</p>
		</div>
	);
};

export default Articles;
