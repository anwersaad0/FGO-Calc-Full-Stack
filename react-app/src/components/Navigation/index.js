import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul className='container-navigation'>
			<li className='site-title'>
				<NavLink exact to="/">
					image pending
				</NavLink>
			</li>

			<li>
				<NavLink className="about-link" exact to="/about">About</NavLink>
			</li>

			{isLoaded && (
				<li className='nav-right-ui'>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;