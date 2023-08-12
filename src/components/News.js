import axios from 'axios';

const apiKey = '4b1d33e7d3b944d8a1a2a16ebe1b9bfd';

export const fetchNewsData = async (searchQuery, fromDate) => {
	try {
		const response = await axios.get(`https://newsapi.org/v2/everything`, {
			params: {
				q: searchQuery,
				from: fromDate,
				sortBy: 'popularity',
				apiKey: apiKey,
			},
		});
		console.log(response.data.articles);
		return response.data.articles;
	} catch (error) {
		throw error;
	}
};
