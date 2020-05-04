import React from 'react';


export default function TourHeader({img}) {
  return (
    <div className='tour-image-container'>
        <img src={img} className='tour-image' alt='' />
    </div>
  );
}