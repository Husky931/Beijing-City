import React from 'react'
import { FaFlag } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'

export default function AttractionIcons() {


    return (
        <div className='attraction-icons'>
            <FaFlag id='icon-1' />
            <FaStar id='icon-2' />
            <FaListUl id='icon-3'/>
        </div>
    )
}