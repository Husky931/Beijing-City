import React from 'react'

export default function FoodImage({img, expandMenu}) {


    return (
        <div className='food-image-container' style={ {display: expandMenu ? 'block' : 'none'}}>
            <img src={img} className='food-image' alt='foods' />
        </div>
    )
}