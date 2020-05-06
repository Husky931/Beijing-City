import React from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export const Navbar = React.forwardRef((props, ref) => {

  // inputRef.current.setAttribute('checked', false)

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
        <input type='checkbox' id='toogle' ref={ref} />
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
}) 
