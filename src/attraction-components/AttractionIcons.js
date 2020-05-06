import React from 'react'
import { Link } from 'react-router-dom'
import { FaFlag } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'

export default function AttractionIcons() {


    return (
        <div className='attraction-icons'>
            <Link to='*'>
            <FaFlag id='icon-1' />
            </Link>
            <Link to='*'>
            <FaStar id='icon-2' />
            </Link>
            <Link to='*'>
            <FaListUl id='icon-3'/>
            </Link>
        </div>
    )
}