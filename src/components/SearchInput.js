import React, { useState } from 'react';

function SearchInput({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSearch = () => {
		console.log(searchQuery);
		if (searchQuery.trim() !== '') {
			onSearch(searchQuery);
		}
	};

	return (
		<div className="search-input">
			<input
				type="text"
				value={searchQuery}
				onChange={handleInputChange}
				placeholder="Enter your search..."
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchInput;
