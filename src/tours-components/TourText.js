import React from 'react';


export default function TourHeader({text}) {
  return (
    <div className='tour-text-paragraph'>
      <strong>{text}</strong>
    </div>
  );
}