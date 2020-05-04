import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import Popup from 'reactjs-popup';
// import subway from '../images/subway.jpg';
// import tourist from '../images/tourist.jpg'


export default function InformationCubesPlus({children}) {

    return (
        <Popup trigger={<button className='information-cube-plus-button'><FaPlusSquare className='fa-sizing'/></button>}
         position="top center" closeOnDocumentClick modal>
             {children}
        </Popup>
    )
}