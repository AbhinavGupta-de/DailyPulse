import React from 'react';
import Article from './Article';

const Hero = ({ artciles }) => {
	return (
		<div className="hero">
			<div className="hero-text">
				<h1>Get the latest news</h1>
				<p>
					Daily Pulse is a news aggregator that allows you to search for news
					articles from various sources and blogs.
				</p>
			</div>

			<div className="main-box">
				<Article />
			</div>
		</div>
	);
};
export default Hero;
