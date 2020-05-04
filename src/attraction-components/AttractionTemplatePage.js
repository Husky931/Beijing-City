import React, { useState, useEffect } from 'react'
import { FiClock } from 'react-icons/fi';
import { BsClockHistory } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi';
import { BsCircleHalf } from 'react-icons/bs'
import { BsCircleFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { FaWalking } from 'react-icons/fa'

import { useParams } from 'react-router-dom'

import textData from './AttractionSinglePageData';

export default function AttractionTemplatePage() {

    const [currentPage, setCurrentPage] = useState([])
    const [imageArrayNumber, setImageArrayNumber] = useState(0)

    const { slug } = useParams()
    
    useEffect(() => {
        const getPage = textData.filter(f => f.id === slug);
        setCurrentPage(getPage)
    }, [slug])

    const loopImageForward = () => {
        imageArrayNumber < 3 ? setImageArrayNumber(imageArrayNumber+1) : setImageArrayNumber(0);
    }
    const loopImageBackward = () => {
        imageArrayNumber === 0 ? setImageArrayNumber(3) : setImageArrayNumber(imageArrayNumber-1)
       }

    return (
        <div className='attraction-template-page-full'>
            <div className='left-side-attraction'>
                <div className='template-header'>
                    <h2 className='template-header-h'>{currentPage.map(m => m.title)} </h2>
                </div>
                <div className='template-rating'>
                    <div>
                    <BsCircleFill className='rating-icons' />
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleFill className='rating-icons'/>
                    <BsCircleHalf className='rating-icons'/>
                    <p className='template-rating-text'>{currentPage.map(m => m.rating)} ratings</p>
                    </div>
                    <div>
                        <FaHeart className='rating-favorite' />
                    </div>
                </div>

                <div className='template-overview'>
                    <p className='template-overview-text'>  Overview</p>
                    <p className='template-overview-text' id='template-overview-text-id'>{currentPage.map(m => m.text)}</p>
                </div>
                <div className='template-icons-area'>
                    <div className='template-icons'>
                        <FiClock />
                        <p className='temp-icons-desc'><span id='closed-now'>{currentPage.map(m => m.open ? 'OPEN NOW' : 'CLOSED NOW') }</span></p>
                    </div>
                    <div className='template-icons'>
                        <BsClockHistory />
                        <p className='temp-icons-desc'><span className='make-bold'>Suggested duration: {currentPage.map(m => m.suggestedDuration)}</span></p>
                    </div>
                    <div className='template-icons'>
                        <MdLocationOn />
                        <p className='temp-icons-desc'><span className='make-bold'>{currentPage.map(m => m.address)}</span></p>
                    </div>
                    <div className='template-icons'>
                        <FiEdit2 />
                        <p className='temp-icons-desc'><span id='listing'>Improve this listing</span></p>
                    </div>
                </div>
                <div className='bottom-listing'>
                    <div className='bottom-listings-first-group'>
                    <FaWalking className='template-icon-botton-tour' />
                    <div className='template-icon-botton-text'>
                        <h4 className='template-icon-botton-header-2'>Plenty Tour and experiences</h4>
                        <p className='template-icon-botton-text-2'>Cultural tours, Walking tours, Biking tours</p>
                    </div>
                    </div>
                    <div className='see-available-tours'>
                        <p>See available tour options</p>
                    </div>
                </div>
            </div>

            <div className='right-side-attraction'>
               <div className='template-image-holder'>
                    <img src={currentPage.map(m => m.images[imageArrayNumber])} className='template-image' alt='slika' />
                    <button className='move-left' onClick={loopImageBackward} > &lt; </button>
                    <button className='move-right' onClick={loopImageForward}> &gt; </button>
               </div>
            </div>
        </div>
    )
}