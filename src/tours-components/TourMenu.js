import React, { useState } from 'react';
import  { AiOutlineArrowDown } from 'react-icons/ai'
import  { AiOutlineArrowUp } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { MdOpenInNew } from 'react-icons/md'


export default function TourHeader() {


  const [isOpen, setIsOpen] = useState(false);

  const toogleHandle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className='tour-menu'>
    <h4 className='tour-menu-header'><strong> More info </strong></h4>
    <button className='tour-menu-button' onClick={toogleHandle}>
      {isOpen? 
        <AiOutlineArrowUp className='ul-icon' />
        : 
        <AiOutlineArrowDown className='ul-icon' />
    }
    
    </button>
    </div>
       {
         isOpen ? 
         <ul>
           <li className='tour-list-items'><MdOpenInNew class='menu-list-icons'/> Open in google maps</li>
           <li className='tour-list-items'><MdLocationOn class='menu-list-icons'/> Try their location</li>
           <li className='tour-list-items'><MdPhone class='menu-list-icons'/> Call their telephone number</li>
           <li className='tour-list-items'><GrFacebookOption class='menu-list-icons'/> Visit Facebook page</li>
           
         </ul>
         :
         <></>
       }
    
     </>
  );
}