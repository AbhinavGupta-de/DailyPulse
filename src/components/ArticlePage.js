import React from 'react';
import Articles from './Articles';

const Hero = ({ articles, onArticleClick }) => {
	return (
		<div className="hero">
			<h2>Featured Articles</h2>
			<div className="article-list">
				{articles
					.filter((articles) => articles.image) // Filter articles with images
					.slice(0, 20) // Limit articles to 20
					.map((articles, index) => (
						<Articles key={index} article={articles} onClick={onArticleClick} />
					))}
			</div>
		</div>
	);
};

export default Hero;
