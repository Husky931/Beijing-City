import React from 'react'


export default function AttractionBoxHeaderImage({img}) {


    return (
        <div className='attraction-box-header-image'>
            <img src={img} className='attraction-preview-image' alt='' />
        </div>
    )
}