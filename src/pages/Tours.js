import React from 'react';
import TourComplete from '../tours-components/TourComplete';
import GoogleMaps from '../tours-components/GoogleMaps';

import hutongFirstImage from '../images/tours-hutong-walking.jpg';
import sideCarsImage from '../images/tours-sidecars.jpg';
import hutongSecondImage from '../images/tour-hutong-2.jpg';
import breakfastImage from '../images/tour-breakfast.jpg';
import teaImage from '../images/tour-tea.jpg';
import bikeImage from '../images/tour-bike.jpg';
import foodsImage from '../images/tour-foods.jpg';
import artImage from '../images/tour-art.jpg';
import imperialImage from '../images/tour-imperial.jpg';

import { hutongFirstText } from '../tours-components/TourTextParagraphs'
import { sideCarText } from '../tours-components/TourTextParagraphs'
import { hutongSecondText } from '../tours-components/TourTextParagraphs'
import { breakfastText } from '../tours-components/TourTextParagraphs'
import { teaTourText } from '../tours-components/TourTextParagraphs'
import { bikingText } from '../tours-components/TourTextParagraphs'
import { foodText } from '../tours-components/TourTextParagraphs'
import { artText } from '../tours-components/TourTextParagraphs'
import { imperialText } from '../tours-components/TourTextParagraphs'

export default function Tours() {

  const map1 = <iframe className='source' title='1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.3360611359208!2d116.38709081538128!3d39.93387197942419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0531c2f0bd64b%3A0x8eee6e3aca8bb34e!2sHutong%20Tour%2C%20Shi%20Cha%20Hai%2C%20Xicheng%20Qu%2C%20Beijing%20Shi%2C%20China!5e0!3m2!1sen!2sus!4v1587726989019!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map2 = <iframe className='source' title='2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24472.166372490945!2d116.43014820761522!3d39.940924483071946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f1ac96a16510d7%3A0x5d8a2bb203d1ad86!2sChaoyang%2C%20China%2C%20100027!5e0!3m2!1sen!2sus!4v1587726571581!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map3 = <iframe className='source' title='3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6118.738381634747!2d116.39516381892238!3d39.93313080454985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f45b19852decd8e!2sBeihai%20Park%2C%20North%20Gate!5e0!3m2!1sen!2sus!4v1587727679629!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map4 = <iframe className='source' title='4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.791095575467!2d116.35260831538102!3d39.923690979425466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5bee3c4445cf1eaa!2sFuchengmen%20station!5e0!3m2!1sen!2sus!4v1587727156245!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map5 = <iframe className='source' title='5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12248.927966854773!2d116.31647778636365!3d39.8690410991993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f04e7d2183c18d%3A0x37258085d5c8fac9!2sLaosi%20Shaobingpu!5e0!3m2!1sen!2sus!4v1587727789216!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map6 = <iframe className='source' title='6' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1917001510246!2d116.40096301538132!3d39.9371014794237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0533b4ab295e9%3A0x8e18a10ae773a65e!2sNan%20Luo%20Gu%20Xiang%2C%20Dongcheng%20Qu%2C%20Beijing%20Shi%2C%20China!5e0!3m2!1sen!2sus!4v1587727286233!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map7 = <iframe className='source' title='7' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6609967047903!2d116.39158731538167!3d39.94897197942227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa66c65668b6fc079!2sGuloudajie%20station!5e0!3m2!1sen!2sus!4v1587727347704!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map8 = <iframe className='source' title='8' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.088033186488!2d116.49390131538287!3d39.98413797941778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9327b7151dc78b63!2s798%20Art%20Zone!5e0!3m2!1sen!2sus!4v1587727440110!5m2!1sen!2sus" tabIndex="0"></iframe>
  const map9 = <iframe className='source' title='9' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.645394329841!2d116.40441691537974!3d39.88218027943086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x372c15453b110e6a!2sTemple%20of%20Heaven!5e0!3m2!1sen!2sus!4v1587727513039!5m2!1sen!2sus" tabIndex="0"></iframe>


  return (
    <div className='tours-page'>

      <div className='left-side'>
        <TourComplete title={'Hutong Walking Day Tour'} subtitle={'Natural Feature, Historical Landmark'} img={hutongFirstImage} text={hutongFirstText} />
        <TourComplete title={'Sidecars Tour'} subtitle={'Historical Landmark'} img={sideCarsImage} text={sideCarText} />
        <TourComplete title={'Beijing Hutong Tour'} subtitle={'Explore the old city'} img={hutongSecondImage} text={hutongSecondText} />
        <TourComplete title={'Breakfast Tour'} subtitle={'Feel the culture with your stomach'} img={breakfastImage} text={breakfastText} />
        <TourComplete title={'Maliandao Tea Tour'} subtitle={'Tea Room and Bakery'} img={teaImage} text={teaTourText} />
        <TourComplete title={'Biking Tour'} subtitle={'See the city on wheels'} img={bikeImage} text={bikingText} />
        <TourComplete title={'Foodie Tour'} subtitle={'Food stall advanture'} img={foodsImage} text={foodText} />
        <TourComplete title={'789 galery Tour'} subtitle={'The artistic side of the city'} img={artImage} text={artText} />
        <TourComplete title={'Imperial Day Tour'} subtitle={'Architectural landmark'} img={imperialImage} text={imperialText} />
      </div>

      <div className='right-side'>
        <GoogleMaps showMap={map1} />
        <GoogleMaps showMap={map2} />
        <GoogleMaps showMap={map3} />
        <GoogleMaps showMap={map4} />
        <GoogleMaps showMap={map5} />
        <GoogleMaps showMap={map6} />
        <GoogleMaps showMap={map7} />
        <GoogleMaps showMap={map8} />
        <GoogleMaps showMap={map9} />
      </div>

    </div>
     
  );
}