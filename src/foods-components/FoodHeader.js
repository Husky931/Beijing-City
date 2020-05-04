import React from 'react'

import {BsChevronDoubleDown} from 'react-icons/bs'
import {BsChevronDoubleUp} from 'react-icons/bs'

export default function FoodHeader({title, handleFlip, expandMenu}) {

   

    return (
        <div className='food-header'>          
            <button className='foodFlipButton' onClick={handleFlip}>
            { expandMenu ? <BsChevronDoubleDown className='food-header-sign' /> 
            : <BsChevronDoubleUp className='food-header-sign' />  }    
            </button>
                <h3 className='food-header-title'>{title}</h3>
        </div>
    )
}