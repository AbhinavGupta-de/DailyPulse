import React from 'react';

const Article = ({ article, onClick }) => {
	return (
		<div className="article-box" onClick={() => onClick(article)}>
			<img src={article.urlToImage} alt={article.title} />
			<h3>{article.title}</h3>
		</div>
	);
};

export default Article;
