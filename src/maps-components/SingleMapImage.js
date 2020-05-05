import React from 'react'


export default function SingleMapImage({img}) {

    return (
        <div className='map-image-div'>
            <img src={img} className='map-image' alt='maps' />
        </div>
    )
}