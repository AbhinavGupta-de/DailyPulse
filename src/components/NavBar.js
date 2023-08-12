import React from 'react';
import SearchInput from './SearchInput';
import logoImg from '../assets/whiteBgLogo.png';

const NavBar = ({ onSearch, onLogoClick }) => {
	return (
		<div id="navbar">
			<div className="logo" onClick={onLogoClick}>
				<img src={logoImg} alt="logo" id="logo-img" />
				<p>Daily Pulse</p>
			</div>
			<SearchInput onSearch={onSearch} />
		</div>
	);
};

export default NavBar;
