import React from 'react';
import MasterNightlifeTemplate from '../nightlife-components/MasterNightlifeTemplate'
import nightlifeData from '../nightlife-components/NightlifeSingleComponentData'


export default function Nightlife() {
  return (
    <div className='nightlife-full-page-div'>

    { nightlifeData.map(m =>  
      <MasterNightlifeTemplate key={m.id} id={m.id} title={m.title} rating={m.rating} text={m.text} 
      open={m.open} entryFee={m.entryFee} address={m.address} phone={m.phone} img={m.img} />
    ) }

    </div>
  );
}