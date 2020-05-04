import React from 'react';
import { Link } from 'react-router-dom'


export default function  HeroBox({title, subtitle, buttonText, pathTo}) {

    return (
        <div className='hero-box'>
            <h1>{title}</h1>
            <div className='straight-line'></div>
            <h5>{subtitle}</h5>
            <Link to={pathTo} className='hero-box-button' >
                {buttonText}
            </Link>
        </div>
    )
}