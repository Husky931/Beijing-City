import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

export default function TourHeader({title, subtitle}) {
  return (
    <div className='tour-header-div'>
    <h2 className='tour-header-title'><strong>{title}</strong></h2>
    <p className='tour-header-paragraph'>{subtitle}</p>
    <div className='tour-header-div-icons'>
    <FaShareAlt className='tour-header-icon-left' />
    <FaBookmark className='tour-header-icon-right' />
    </div>
    </div>
  );
}