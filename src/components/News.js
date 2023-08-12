import axios from 'axios';

const apiKey = '4b1d33e7d3b944d8a1a2a16ebe1b9bfd';

export const fetchNewsData = async () => {
	try {
		const response = await axios.get(
			`API_ENDPOINT_URLhttps://newsapi.org/v2/everything?q=Apple&from=2023-08-12&sortBy=popularity&apiKey=`,
			{
				params: {
					apiKey: apiKey,
					// Other parameters if required
				},
			}
		);
		return response.data.articles;
	} catch (error) {
		throw error;
	}
};
