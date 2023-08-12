import React from 'react';
import Articles from './Articles';

const Hero = ({ articles, onArticleClick }) => {
	return (
		<div className="hero">
			<h2>Featured Articles</h2>
			<div className="article-list">
				{articles.map((article, index) => (
					<Articles key={index} article={article} onClick={onArticleClick} />
				))}
			</div>
		</div>
	);
};

export default Hero;
