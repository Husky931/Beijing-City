import React from 'react'


export default function FoodText({text, expandMenu}) {


    return (
        <div className='food-text-div' style={ {display: expandMenu ? 'block' : 'none'}}> 
           <p className='food-text'>{text}</p>
        </div>
    )
}