import React from 'react';

const Article = ({ article }) => {
	return (
		<div className="article-box">
			<img src={article.image} alt={article.title} className="" />
			<h3>{article.title}</h3>
		</div>
	);
};

export default Article;
