import React from 'react'
import { Link } from 'react-router-dom'

import summerpalace1 from '../images/summer-palace-1.jpeg';
import greatWall from '../images/great-wall-1.jpeg';
import lamaTemple from '../images/lama-temple-1.jpg';

import FeaturedSingles from './FeaturedSingles'

export const FeaturedAttractions = () => {


    return (
        <>
        <h1 id="featured-attractions-h">Featured Attractions</h1>
        <div className='featured-full-div' >      
            <Link to='/attractions/summer-palace' >
            <FeaturedSingles img={summerpalace1} title={'Summer Palace'}  text={`The Summer Palace is the summer resort for the Qing dynasty's royal family.It is covered 3/4 with the water,the rest are hills and palaces.The Long corridor is the longest corridor in the world.`} />
            </Link>
            <Link to='/attractions/great-wall' >
            <FeaturedSingles img={greatWall} title={'Temple of Heaven'} text={`In 1368 AD, Mutianyu Great Wall was built by Xu Da who is the main general for Zhuyuanzhang in the Great Wall ruins of Northern Qi Dynasty. Its been the main Chinese landmark for centuries.`} />
            </Link>
            <Link to='/attractions/lama-temple' >
            <FeaturedSingles img={lamaTemple} title={'Lama temple'} text={`A series of beautiful pavilions comprise this Mongolian-Tibetan yellow-sect temple, which features an impressive fifty-four-foot high Buddha carved from one piece of Tibetan sandalwood. Great history`} />
            </Link>
        </div>
        </>
    )
}