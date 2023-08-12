import React from 'react';
import SearchInput from './SearchInput';
import logoImg from '../assets/whiteBgLogo.png';

const NavBar = ({ onSearch, onLogoClick }) => {
	return (
		<div className="navbar">
			<div className="logo" onClick={onLogoClick}>
				<img src={logoImg} alt="logo" className="logo-img" />
				<p>Daily Pulse</p>
			</div>
			<SearchInput onSearch={onSearch} />
		</div>
	);
};

export default NavBar;
