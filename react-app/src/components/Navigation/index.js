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

			<div className='site-nav-bar'>
				<li>
					<NavLink className="nav-bar-link" exact to="/about">About</NavLink>
				</li>
				
				<li>
					<NavLink className="nav-bar-link" exact to="/projects">Projects</NavLink>
				</li>

				<li>
					<NavLink className="nav-bar-link" exact to="/merch">Merch</NavLink>
				</li>

				<li>
					<NavLink className="nav-bar-link" exact to="/contact">Contact</NavLink>
				</li>

				<li>
					<NavLink className="nav-bar-link" exact to="/forum/posts">Forum</NavLink>
				</li>

				{isLoaded && (
					<li className='nav-right-ui'>
						<ProfileButton user={sessionUser} />
					</li>
				)}
			</div>
		</ul>
	);
}

export default Navigation;