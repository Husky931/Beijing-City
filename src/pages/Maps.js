import React, { useEffect } from 'react';
import MapSingle from '../maps-components/MapSingle'

import { headerTitle } from '../maps-components/MapsData'
import { mapText } from '../maps-components/MapsData'
import { imagesMaps } from '../maps-components/MapsData'

export const Maps = React.forwardRef((props, ref) => {

  useEffect(() => {
    if (ref.current.checked === true) {
      ref.current.checked = false
    }
  })

  return (
    <div className='maps-full-page-div'>
      <MapSingle headerTitle={headerTitle[0]} mapText={mapText[0]} img={imagesMaps[0]} />
      <MapSingle headerTitle={headerTitle[1]} mapText={mapText[1]} img={imagesMaps[1]} />
      <MapSingle headerTitle={headerTitle[2]} mapText={mapText[2]} img={imagesMaps[2]} />
      <MapSingle headerTitle={headerTitle[3]} mapText={mapText[3]} img={imagesMaps[3]} />
      <MapSingle headerTitle={headerTitle[4]} mapText={mapText[4]} img={imagesMaps[4]} />
      <MapSingle headerTitle={headerTitle[5]} mapText={mapText[5]} img={imagesMaps[5]} />
      <MapSingle headerTitle={headerTitle[6]} mapText={mapText[6]} img={imagesMaps[6]} />
      <MapSingle headerTitle={headerTitle[7]} mapText={mapText[7]} img={imagesMaps[7]} />
      <MapSingle headerTitle={headerTitle[8]} mapText={mapText[8]} img={imagesMaps[8]} />
      <MapSingle headerTitle={headerTitle[9]} mapText={mapText[9]} img={imagesMaps[9]} />
      <MapSingle headerTitle={headerTitle[10]} mapText={mapText[10]} img={imagesMaps[10]} />
    </div>
  );
}) 