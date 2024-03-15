import { Link, NavLink } from "react-router-dom"
import React from 'react'
import Logo from '../assets/Apex-Header.svg'

const Header = () => {
	return (
		<header>
			<Link className='logo' to='/'>
				<img src={Logo} alt=''/>
			</Link>
			<nav className='navigation'>
				<NavLink to="/" className='link' end>Home</NavLink>
				<NavLink to="/products" className='link'>Products</NavLink>
				<NavLink to="/contact" className='link'>Contact</NavLink>
			</nav>
		</header>
	)
}

export default Header