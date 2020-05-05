import React from 'react'
import SingleMapHeader from './SingleMapHeader'
import SingleMapText from './SingleMapText'
import SingleMapImage from './SingleMapImage'


export default function MapSingle({headerTitle, mapText, img}) {

    return (
    <div className='single-map-full-div'>
        <SingleMapHeader headerTitle={headerTitle} />
        <SingleMapText mapText={mapText} />
        <SingleMapImage img={img} />
    </div>
    )
}