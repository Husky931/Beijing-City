import React, { useEffect } from 'react';
import MasterNightlifeTemplate from '../nightlife-components/MasterNightlifeTemplate'
import nightlifeData from '../nightlife-components/NightlifeSingleComponentData'

import Header from '../Header'


import pic6 from '../images/header6.jpg';

export const Nightlife = React.forwardRef((props, ref) => {

  useEffect(() => {
    if (ref.current.checked === true) {
      ref.current.checked = false
    }
  })
  
  return (
    <>
    <Header pic={pic6} />
    <div className='nightlife-full-page-div'>

    { nightlifeData.map(m =>  
      <MasterNightlifeTemplate key={m.id} id={m.id} title={m.title} rating={m.rating} text={m.text} 
      open={m.open} entryFee={m.entryFee} address={m.address} phone={m.phone} img={m.img} />
    ) }

    </div>
    </>
  );
}) 