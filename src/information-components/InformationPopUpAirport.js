import React from 'react';
import shuffle from '../images/shuffle.png'

export default function InformationPopUpAirport() {

    return(
        <div className='popup-window'>
            <div className='popUp-box'>
            <div className='popUp-image-container'>
                    <img src={shuffle} class='image-inside-popup' alt='shuffle bus at the airport' />
                </div>
                <h6>1 - Airport Terminal No.03 Shuttle Bus Service</h6>
                <p className='popUp-box-text'>The Terminal No.03 ( T3 ) is a huge 4-storey building. The T3 Bus Terminal is located outside the first floor of T3. Your arrival hall is on the second floor. That means you have to take a lift to the first floor and buy the bus ticket at the ticket desk there, and go out of the building.</p>
                <p className='popUp-box-text'>Once outside, you will see several rows of buses waiting by the side of big signboards showing different bus routes. Please check the signboards to find your right destination.</p>
                <p className='popUp-box-text'>Ticket Booth: Gate No.7 or No.9 (Outside) on F1</p>
                
                <h6>2 - Airport Terminal No.02 Shuttle Bus Service</h6>
                <p className='popUp-box-text'>The Terminal No.02 ( T2 ) is a big 3-storey building. The T2 Bus Terminal is located outside the first floor of T2. Your arrival hall is on the first floor. So you just go out of the arrival hall. By the Gate No 11 of the arrival hall, you will find the Bus Ticket Selling Desk.</p>
                <p className='popUp-box-text'>All the buses are waiting by the side of big signboards showing different bus routes. Please check the signboards to find your right destination.</p>
                <p className='popUp-box-text'>Ticket Booth: Gate No.11 (outside) on F1</p>
        </div>
        </div>
    )
}