import React from 'react';
import MasterNightlifeTemplate from '../nightlife-components/MasterNightlifeTemplate'
import nightlifeData from '../nightlife-components/NightlifeSingleComponentData'


export default function Nightlife() {
  return (
    <div className='nightlife-full-page-div'>

{/* JUST IMPORT THE ARRAY AND USE MAP TO PRODUCE ALL THE COMPONENTS TOGETHER WITH THEIR PROPS!!!! AUTOMATICAL */}

    { nightlifeData.map(m =>  
      <MasterNightlifeTemplate id={m.id} title={m.title} rating={m.rating} text={m.text} open={m.open} entryFee={m.entryFee} address={m.address} phone={m.phone} img={m.img} />
    ) }

      {/* <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate />
      <MasterNightlifeTemplate /> */}
    </div>
  );
}