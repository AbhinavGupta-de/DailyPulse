import React from 'react';
import SearchInput from './SearchInput';
import logoImg from '../assets/whiteBgLogo.png';

const NavBar = () => {
	return (
		<div id="navbar">
			<div className="logo">
				<img src={logoImg} alt="logo" id="logo-img" />
				<p>Daily Pulse</p>
			</div>
			<SearchInput />
		</div>
	);
};

export default NavBar;
