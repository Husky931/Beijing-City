import React, { useState } from 'react'
import FoodHeader from './FoodHeader'
import FoodImage from './FoodImage'
import FoodText from './FoodText'

export default function FoodFatherComponent({title, img, text}) {

    const [expandMenu, setExpandMenu] = useState(false)

    const flipMenu = () => {
        setExpandMenu(!expandMenu)
    }

    return (
        <div className='food-father-component'>
            <FoodHeader title={title} handleFlip={flipMenu} expandMenu={expandMenu} />
            <FoodImage img={img} expandMenu={expandMenu} />
            <FoodText text={text} expandMenu={expandMenu} />
        </div>
    )
}