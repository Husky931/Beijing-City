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
                <InformationCubes title={'Airport shuffle'} children={<InformationPopUpAirport />} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                <InformationCubes title={'Taxi fares'} children={<InformationPopUpTaxi />} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                <InformationCubes title={'Subway map'} children={<InformationPopUpSubway />} text={`Don't be a lost traveler and get prepared in time. Save our map,look at the subway lines and hit the ground as soon as you land`} />
                <InformationCubes title={'Tourist areas'} children={<InformationPopUpTourist />} text= {`Why waste time and google which are the best places to visit during your stay here? We already did that for you. Come on.`}/>                                                             
            </div>
        </div>
    )
}