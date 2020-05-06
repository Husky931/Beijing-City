import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BsCircleHalf } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { BsClockHistory } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'



export default function MasterNightlifeTemplate({id, title, rating, text, open, entryFee, address, phone, img}) {

    
    const [imageArrayNumber, setImageArrayNumber] = useState(0)

    const loopImageForward = () => {
        imageArrayNumber < 3 ? setImageArrayNumber(imageArrayNumber+1) : setImageArrayNumber(0);
    }
    const loopImageBackward = () => {
        imageArrayNumber === 0 ? setImageArrayNumber(3) : setImageArrayNumber(imageArrayNumber-1)
       }

    return (
        <div className='nightlife-template-page-full'>
            <div className='left-side-attraction'>
                <div className='template-header'>
                    <h2 className='template-header-h'>{title} </h2>
                </div>
                <div className='template-rating'>
                    <div>
                    <BsCircleFill className='rating-icons' />
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleHalf className='rating-icons'/>
                    <p className='template-rating-text'>{rating} ratings</p>
                    </div>
                    <div>
                        <FaHeart className='rating-favorite' />
                    </div>
                </div>

                <div className='template-overview'>
                    <p className='template-overview-text'>  Overview</p>
                    <p className='template-overview-text' id='template-overview-text-id'>{text}</p>
                </div>
                <div className='template-icons-area'>
                    <div className='template-icons'>
                        <FiClock />
                        <p className='temp-icons-desc'><span className='make-bold'>Open time: {open}</span></p>
                    </div>
                    <div className='template-icons'>
                        <BsClockHistory />
                        <p className='temp-icons-desc'><span className='make-bold'>Entry fee: {entryFee}</span></p>
                    </div>
                    <div className='template-icons'>
                        <MdLocationOn />
                        <p className='temp-icons-desc'><span className='make-bold'>{address}</span></p>
                    </div>
                    <div className='template-icons'>
                        <FiEdit2 />
                        <p className='temp-icons-desc'><span className='make-bold'>Phone:{phone}</span></p>
                    </div>                    
                </div>

               
                            <div className='see-available-tours-nightlife'>
                                <p>Book online and get a free drink</p>
                            </div>
            </div>

            <div className='right-side-attraction'>
               <div className='template-image-holder'>
                    <img src={img[imageArrayNumber]} className='template-image' alt='slika' />
                    <button className='move-left' onClick={loopImageBackward} > &lt; </button>
                    <button className='move-right' onClick={loopImageForward}> &gt; </button>
               </div>
            </div>
        </div>
    )
}