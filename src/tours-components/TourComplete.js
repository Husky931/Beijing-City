import React from 'react';
import TourHeader from '../tours-components/TourHeader';
import TourImage from '../tours-components/TourImage'
import TourText from '../tours-components/TourText'
import TourMenu from '../tours-components/TourMenu'

export default function TourComplete({title, subtitle, img, text}) {
  return (
    <div className='tour-complete-div'>
        <TourHeader title={title} subtitle={subtitle} />
        <TourImage img={img} />
        <TourText text={text}/>
        <TourMenu />
    </div>
  );
}