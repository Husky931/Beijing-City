import React from 'react';
import AttractionEntryBox from '../attraction-components/AttractionEntryBox';
import { useRouteMatch, Link } from 'react-router-dom';
// import Error from './Error'

import beihai1 from '../images/beihai-1.jpeg';
import forbidden1 from '../images/forbidden-city-1.jpeg';
import greatwall1 from '../images/great-wall-1.jpeg';
import houhai1 from '../images/houhai-1.jpg';
import lamatemple1 from '../images/lama-temple-1.jpg';
import summerpalace1 from '../images/summer-palace-1.jpeg';
import templeheaven1 from '../images/temple-heaven-1.jpg';
import tianmen1 from '../images/tianmen-square-1.jpg';


export default function Attraction() {

    let {url} = useRouteMatch()
    // console.log(path)

  return (
    <>
    <div className='attraction-full-div-component'>
         <Link to={`${url}/lama-temple`} className='link-attractions'>
              <AttractionEntryBox img={lamatemple1} title={'Lama temple'} introText={'A series of beautiful pavilions comprise this Mongolian-Tibetan yellow-sect temple, which features an impressive fifty-four-foot high Buddha carved from one piece of Tibetan sandalwood.'} />
        </Link>
        <Link to={`${url}/forbidden-city`} className='link-attractions'>
        <AttractionEntryBox img={forbidden1} title={'Forbidden city'} introText={'Consisting of more than 9,000 rooms and spread over 250 acres, this huge palace complex was built in the 15th century and later extensively renovated and restored'} />
        </Link>
        <Link to={`${url}/great-wall`} className='link-attractions'>
        <AttractionEntryBox img={greatwall1} title={'Great wall'} introText={' Surrounded by the mountains, the Greening rate of the Great Wall reaches 98%, and its scenery is beautiful. Known for its gorgeous scenery, Mutianyu is one of the essence in the Great Wall of Ming Dynasty.'} />
        </Link>
        <Link to={`${url}/hou-hai`} className='link-attractions'>
        <AttractionEntryBox img={houhai1} title={'Hou Hai lake'} introText={'This area of Beijing contains some of the most extensive old hutong neighborhoods and the three lakes of Xihai, Houhai and Oianhai.'} />
        </Link>
        <Link to={`${url}/bei-hai`} className='link-attractions'>
        <AttractionEntryBox img={beihai1} title={'Beihai park'} introText={'Kubla Khan in 1260 took up residence in this palace, which today is a 168-acre park filled with historic buildings, restaurants and a lake.'} />
        </Link>
        <Link to={`${url}/summer-palace`} className='link-attractions'>
        <AttractionEntryBox img={summerpalace1} title={'Summer palace'} introText={`The Summer Palace is the summer resort for the Qing dynasty's royal family.It is covered 3/4 with the water,the rest are hills and palaces.The Long corridor is the longest corridor in the world`} />
        </Link>
        <Link to={`${url}/temple-heaven`} className='link-attractions'>
        <AttractionEntryBox img={templeheaven1} title={'Temple of heaven'} introText={'Built in 1420 with a total area of 270 acres, this is the largest building for religious worship in China, which was originally used by the Ming and Qing emperors to pay homage to Heaven and to pray for a year of rich harvest.'} />
        </Link>
        <Link to={`${url}/tianmen-square`} className='link-attractions' >
        <AttractionEntryBox img={tianmen1} title={'Tianmen square'} introText={`Located in the heart of modern China and the site for massive parades and rallies, this was the site when in 1949, from a rostrum on the Gate of Heavenly Peace, Chairman Mao announced the establishment of the People's Republic of China.`} />
        </Link>
        

    </div>
    </>
  );
}