import React, { useState } from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa';

export default function Navbar() {

    const [isClicked, setIsClicked] = useState(false);
    
    const handleToogle = () => {
        setIsClicked(!isClicked)
    }
    
  return (
    <nav id='nav'>
       <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/' className='nav-header'>
                        <div id='logo-container'>
                        <img src={Logo} alt='Beijing website logo' id='logo' />
                        </div>
                        <button type='button' className='nav-btn' onClick={handleToogle}> 
                        <FaAlignJustify className='nav-icon' />
                        </button>
                    </Link>
                </div>
                <ul className={isClicked ? 'nav-links show-nav':'nav-links'}>
                    <li>
                        <Link to='/'>Attractions</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Tours</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Foods</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Museum</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Nightlife</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Maps</Link>
                    </li>
                </ul>
                </div>
    </nav>
  );
}

