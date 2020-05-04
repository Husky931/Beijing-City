import React from 'react'


export default function MuseumThumbnails({img, title, introText}) {


    return (
        <div className='museum-thumbnail'>
            <div className='museum-thumbnail-image-holder'>
                <img src={img} className='museum-thumbnail-image' alt='museum preview' />
            </div>
            <div className='museum-intro-title'>
                <h3><strong>{title}</strong></h3>
            </div>
            <div className='museum-intro-text'>
                    {introText}
            </div>
        </div>
    )
}