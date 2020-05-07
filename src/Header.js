import React from 'react'

export default function Header({pic}) {

    return (
        <div className='mega-header'>
            <img src={pic} className='big-header-img' alt='mega header' />
        </div>
    )
}