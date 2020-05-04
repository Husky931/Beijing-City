import React from 'react';
import taxi from '../images/taxi.webp';


export default function InformationPopUpTaxi() {

    return  (
        <div className='popup-window'>
            <div className='popUp-box'>
            <div className='popUp-image-container'>
                    <img src={taxi} className='image-inside-popup' alt='shuffle bus at the airport' />
                </div>
                <h6>Daytime (from 05:00 to 22:59)</h6>
                <p className='popUp-box-text'>A taxi fare in Beijing depends on the vehicle. On average, they start about 13 yuan for up to 3 kilometers during the daytime, and then the fare increases at 2.3 yuan increments for each kilometer.</p>
                <p className='popUp-box-text'>Five minutes of waiting time adds 2.3 yuan. After 15 kilometers (9 miles), the price per kilometer rises to 3.5 yuan.</p>
                <p className='popUp-box-text'>At the end, it is a good idea to ask for a receipt (发票 fā piào).</p>
                
                <h6>Nighttime Fare (from 23:00 to 04:49)</h6>
                <p className='popUp-box-text'>The per kilometer rates rise 20% above those above.</p>
                <h6>Additional Charges</h6>
                <p className='popUp-box-text'>Road tolls that are usually 5 or 10 yuan are paid by passengers.</p>
                
        </div>
        </div>
    )
}