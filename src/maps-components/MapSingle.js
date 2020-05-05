import React from 'react'
import SingleMapHeader from './SingleMapHeader'
import SingleMapText from './SingleMapText'
import SingleMapImage from './SingleMapImage'


export default function MapSingle({map}) {

    return (
    <div className='single-map-full-div'>
        <SingleMapHeader />
        <SingleMapText />
        <SingleMapImage map={map} />
    </div>
    )
}