import React from 'react';
import hero from '../images/hero.jpg'
import HeroBox from  './HeroBox'


export default function Hero({title, subtitle, buttonText, pathTo}) {


    return (
        <section className='background-image-section'>
            <img src={hero} className='section-image' alt='wallpaper-background'  />
            <HeroBox title={title} subtitle={subtitle} buttonText={buttonText} pathTo={pathTo}/>
        </section>
    )
}