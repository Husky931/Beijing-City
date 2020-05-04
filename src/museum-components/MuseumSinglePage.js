import React from 'react'
import { useParams } from 'react-router-dom'

export default function MuseumSinglePage({allTheMuseumData}) {

    let {smug} = useParams()

    console.log(smug)

    let currentMuseumPage = allTheMuseumData.filter(f=> f.id === smug)
    console.log(currentMuseumPage)

    return (
       <div className='museumSinglePageDiv'>
        <div className='images-place-left'>
           <div className='museum-header-image-container'>
                <img src={currentMuseumPage[0].images[0]} className='museum-header-image' alt='museum' />
           </div>
           <div className='museum-header-image-container'>
                <img src={currentMuseumPage[0].images[1]} className='museum-header-image' alt='museum' />
           </div>
           <div className='helper-text'>
            <h4 className='helper-text-individual'><strong>price:</strong> {currentMuseumPage[0].price}  </h4>
            <h4 className='helper-text-individual'><strong>address:</strong>{currentMuseumPage[0].address}  </h4>
            {/* {currentMuseumPage.filter(f=>f.directions ? <h4 className='helper-text-individual'><strong>dirrections{f.directions}</strong></h4> : '') } */}
            <h4 className='helper-text-individual'>time:{currentMuseumPage[0].time} </h4>
            <h4 className='helper-text-individual'>tel: {currentMuseumPage[0].tel} </h4>
           </div>
        </div>
        <div className='right-side'>
            <h2 className='right-side-title'> {currentMuseumPage[0].title} </h2>
        <p className='museum-text'>
            {currentMuseumPage[0].text}
        </p>
        
        </div>

           

       </div>
    )
}