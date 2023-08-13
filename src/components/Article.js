import React from 'react';

const Article = ({ article, onClick }) => {
	return (
		<div className="article-box" onClick={() => onClick(article)} on>
			<img src={article.image} alt={article.title} className="" />
			<h3>{article.title}</h3>
			<p className="publisher">{article.source.name}</p>
		</div>
	);
};

export default Article;
