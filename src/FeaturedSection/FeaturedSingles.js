import React from 'react'


export default function FeaturedSingles({img, title, text}) {


    return (
        <div className='featured-single'>
            <div className='image-container-featured'>
                <img src={img} alt='slika' className='img-featured' />
            </div>
            <div className='featured-h-div'>
            <h3>   <strong> {title} </strong> </h3>
            </div>
            <div className='featured-text-div'>
                {text}
            </div>
        </div>
    )
}