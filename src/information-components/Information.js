import React from 'react';
import InformationCubes from './InformationCubes';
import InformationPopUpAirport from './InformationPopUpAirport';
import InformationPopUpTaxi from './InformationPopUpTaxi';
import InformationPopUpSubway from './InformationPopUpSubway'
import InformationPopUpTourist from './InformationPopUpTourist'

export default function Information() {

    return (
        <div className='information-section'>
            <div className='information-section-header'>
                <h1 id='information-section-h1'>Information</h1>
                <div className='information-line'></div>
            </div>
            <div className='information-cubes-grid-layout'>
                <InformationCubes title={'Airport shuffle'} children={<InformationPopUpAirport />} text={`Get informed what are your optons to get into the city once you land, subway, bus or taxi, find out more about it right here.`} />
                <InformationCubes title={'Taxi fares'} children={<InformationPopUpTaxi />} text={`Getting a fair taxi price as a new tourist in a city can be very challenging experience sometimes. We are here to help you with that.`} />
                <InformationCubes title={'Subway map'} children={<InformationPopUpSubway />} text={`Don't be a lost traveler and get prepared in time. Save our map,look at the subway lines and hit the ground as soon as you land.`} />
                <InformationCubes title={'Tourist areas'} children={<InformationPopUpTourist />} text= {`Why waste time and google which are the best places to visit during your stay here? We already did that for you. Come on.`}/>                                                             
            </div>
        </div>
    )
}