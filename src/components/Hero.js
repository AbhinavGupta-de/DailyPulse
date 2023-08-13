import React from 'react';
import Article from './Article';

const Hero = ({ articles }) => {
	console.log(articles);
	return (
		<div className="hero">
			<div className="hero-text">
				<h1>Get the latest news</h1>
				<p>
					Daily Pulse is a news aggregator that allows you to search for news
					articles from various sources and blogs.
				</p>
			</div>

			<div className="article-list">
				{articles.map((article) => {
					return <Article key={article.id} article={article} />;
				})}
			</div>
		</div>
	);
};
export default Hero;
