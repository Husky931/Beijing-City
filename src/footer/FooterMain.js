import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { GrYoutube } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'



export const FooterMain = () => {

    return (
        <>
        <div className='footer-main-div'>
            <div className='ul-division'>
                <ul className='footer-ul-list'>
                <h4 className='division-header'>The company</h4>
                    <li className='li-text'>About us</li>
                    <li className='li-text'>The team</li>
                    <li className='li-text'>The content team</li>
                    <li className='li-text'>Our developers</li>
                </ul>
            </div>

            <div className='ul-division'> 
                <ul className='footer-ul-list'>
                <h4 className='division-header'>Contact Us</h4>
                    <li className='li-text'>Get in touch</li>
                    <li className='li-text'>Advertise & partner </li>
                    <li className='li-text'>Carrers</li>
                    <li className='li-text'>Freelance jobs</li>
                </ul>
            </div>

            <div className='ul-division'>
                <ul className='footer-ul-list'>
                <h4 className='division-header'>Legal</h4>
                    <li className='li-text'>Privacy policy</li>
                    <li className='li-text'>Terms of use</li>
                    <li className='li-text'>Cookie policy</li>
                    <li className='li-text'>Booking terms</li>
                </ul>
            </div>

            <div className='ul-division'>
            <h4 className='division-header'>Follow Us</h4>
                <ul className='footer-ul-list'>
                    <li><FaFacebook /></li>
                    <li><FaInstagramSquare /></li>
                    <li><FaPinterest /></li>
                    <li><AiFillTwitterCircle /></li>
                    <li><GrYoutube /></li>
                    <li><GrLinkedin /></li>
                </ul>
            </div>
        </div>
        </>
    )
}