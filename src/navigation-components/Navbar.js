import React from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav id='nav'>
        <div id='logo-container'>
        <button id='logo-cover'>
        <Link to='/'>
        <img src={Logo} id='logo' alt='website-logo' />
        </Link>
        </button>
        </div>
        <label htmlFor='toogle'>&#9776;</label>
        <input type='checkbox' id='toogle' />
        <div className='menu'>
        <Link to='/attractions'>Attractions</Link>
        <Link to='/tours'>Tours</Link>
        <Link to='/museum'>Museum</Link>
        <Link to='/foods'>Foods</Link>
        <Link to='/nightlife'>Nightlife</Link>
        <Link to='/maps'>Maps</Link>
        </div>
    </nav>
  );
}
