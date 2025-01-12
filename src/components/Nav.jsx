import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';
import { Link } from "react-router-dom"

// we need to import library logo like, this, we do not add them like we did in html directly in the code giving directory 

const Nav = () => {
function openMenu() {
    document.body.classList += " menu--open";
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                <img src={LibraryLogo} alt="" className="logo" />
                </Link>
                <ul className='nav__links'>
                    <li className='nav__list'>
                        <Link to="/" className='nav__link'>Home</Link>
                    </li>
                    <li className='nav__list'>
                        <Link to="/books" className='nav__link'>Books</Link>
                    </li>
                    <button className='btn__menu' onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className='nav__icon'>
                        <Link to="/cart" className='nav__link'>
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">3</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className='menu__link'>Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className='menu__link'>Books</Link>
                         </li>
                        <li className="menu__list">
                            <Link to="/cart" className='menu__link'>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;


// function openMenu() { document.body.classList += " menu--open";  - we add this so the hamburger on smaller screens opens the menu 
// and then we add onClick to the btn__menu : onClick={openMenu}  no parentsasis after openMenu as then it calls it straight away 
// but if you need to pass some props then arrow function: onClick={() => closeMenu(props)}
// to create smooth rerouting, we need to change every a href to link: Link to 
// and we need to import link form React dom. We need to change all a hrefs on the whole page 