import React from 'react';

const ArticlePage = ({ article }) => {
	const contentWithoutLastSentence =
		article.content.split('.').slice(0, -1).join('.') + '.';

	return (
		<div className="article-page">
			<div className="article-details">
				<img src={article.urlToImage} alt={article.title} />
				<h2>{article.title}</h2>
				<p>{contentWithoutLastSentence}</p>
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					Read the full article
				</a>
			</div>
		</div>
	);
};

export default ArticlePage;
