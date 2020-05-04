import React from 'react'
import GoogleIndividualMap from './GoogleIndividualMap';


export default function GoogleMaps({showMap}) {


    return (
        <div className='google-maps'>
            <GoogleIndividualMap showMap={showMap} />
        </div>
    )
}