import React from 'react';
import MapSingle from '../maps-components/MapSingle'

import areasMap from '../images/maps/areas.webp'
import forbiddenMap from '../images/maps/forbidencity.webp'
import lamaMap from '../images/maps/lamatemple.webp'
import landmarksMap from '../images/maps/landmarks.webp'
import subburbsMap from '../images/maps/suburbs.webp'
import subwayMap from '../images/maps/subway.webp'
import templeHeavenMap from '../images/maps/templeheaven.webp'
import tianmenSquareMap from '../images/maps/tianmensquare.webp'
import touristMap from '../images/maps/touristmap.webp'
import tripOptionsMap from '../images/maps/tripOptions.webp'
import zooMap from '../images/maps/zoo.webp'


export default function Maps() {
  return (
    <div className='maps-full-page-div'>
      <MapSingle map={areasMap} />
    </div>
  );
}