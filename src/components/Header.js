import React from 'react'
import Logo from "../assets/7.jpg"

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="" />
            <a href="/">Home</a>
        </header>
    )
}

export default Header
